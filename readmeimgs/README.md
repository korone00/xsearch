## Postgresql 테이블:

위 이미지 파일을 참고하시면 이해하기 좋습니다.

- 📸 **Relational database for xsearch project**
  
    <details><summary>이미지 보기</summary>
    <div>
        <img width="1280" alt="user_entity" src="https://github.com/korone00/xsearch/tree/main/Relational database.png">
    </div>
    </details>

### 📄 `user.entity.ts`

이 파일은 사용자 정보를 저장하고 관리하기 위한 엔터티입니다.

<details><summary>user.entity.ts 코드 보기</summary>
<div>

```typescript
@Entity()
export class User extends BaseEntity {
  @ApiProperty({
    example: 'kangin',
    description: 'id',
    required: true,
  })
  @PrimaryColumn()
  id: string;

  @ApiProperty({
    example: '0219',
    description: 'pw',
    required: true,
  })
  @Column()
  password: string;

  @ApiProperty({
    example: '이강인',
    description: 'name',
    required: true,
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 'kangin@gmail.com',
    description: 'email',
    required: true,
  })
  @Column()
  email: string;

  @ApiProperty({
    example: '010-5917-7550',
    description: 'phone',
    required: true,
  })
  @Column()
  phone: string;

  @ApiProperty({
    example: 'user',
    description: 'role',
    required: false,
  })
  @Column()
  role: string;
}
```

</div>
</details>

---

**필드:**

- **id (문자열, 주요키):** 사용자의 고유 식별자. 예: 'kangin'
- **password (문자열):** 사용자의 비밀번호. 예: '0219'
- **name (문자열):** 사용자 이름. 예: '이강인'
- **email (문자열):** 사용자의 이메일 주소. 예: 'kangin@gmail.com'
- **phone (문자열):** 사용자의 전화번호. 예: '010-5917-7550'
- **role (문자열):** 시스템 내 사용자의 역할. 예: 'admin'

---

### 📄 `historyData.entity.ts`

이 파일은 업로드된 이미지의 히스토리 데이터를 저장하고 관리하기 위한 엔터티입니다.

<details><summary>historyData.entity.ts 코드 보기</summary>
<div>

```typescript
@Entity()
export class historyData {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @ManyToOne(() => rawResponseData)
  @JoinColumn({ name: 'number' })
  number: number;

  @ApiProperty()
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user_id: string;

  @ApiProperty()
  @Column()
  modifiedFileName: string;

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  uploadDate: Date;

  @ApiProperty({ type: [String] })
  @Column('simple-array')
  pred: string[];
}
```

</div>
</details>

---

**필드:**

- **id (정수, 주요키):** 고유 식별자.
- **number (정수, 외래키 > rawResponseData.id):** 관련 원시 응답 데이터.
- **user_id (문자열, 외래키 > User.id):** 관련 사용자.
- **modifiedFileName (문자열):** 수정된 파일 이름.
- **uploadDate (타임스탬프):** 업로드된 시각.
- **pred (문자열 배열):** 예측 값.

---

### 📄 `rawResponseData.entity.ts`

이 파일은 engine에서의 이미지 처리 결과의 데이터를 저장하고 관리하기 위한 엔터티입니다.

<details><summary>rawResponseData.entity.ts 코드 보기</summary>
<div>

```typescript
@Entity()
export class rawResponseData {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  img_path: string;

  @ApiProperty({ type: [String] })
  @Column('simple-array')
  pred: string[];

  @ApiProperty({ type: [String] })
  @Column('simple-array')
  score: string[];
}
```

</div>
</details>

---

**필드:**

- **id (정수, 주요키):** 고유 식별자.
- **img_path (문자열):** 이미지 경로.
- **pred (문자열 배열):** 예측된 결과.
- **score (문자열 배열):** 예측 점수.

---

### 📄 `visitCount.entity.ts`

이 파일은 사용자의 방문 횟수를 저장하고 관리하기 위한 엔티티입니다.

<details><summary>visitCount.entity.ts 코드 보기</summary>
<div>

```typescript
@Entity('visitCount')
export class VisitCount {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ApiProperty()
  @Column('int')
  count: number;

  @ApiProperty()
  @Column({ type: 'timestamp' })
  uploadDate: Date;
}
```
---
</div>
</details>

---

**필드:**

- **id (문자열, 주요키):** 고유 식별자.
- **user_id (문자열, 외래키 > User.id):** User table에서 받은 id 외래키
- **count (정수):** 누적 방문 횟수.
- **uploadDate (타임스탬프):** 방문을 한 시각.

---

### 📄 `performanceMetrics.entity.ts`

이 파일은 시스템 성능 측정 데이터를 저장하고 관리하기 위한 엔티티입니다.

<details><summary>performanceMetrics.entity.ts 코드 보기</summary>
<div>

```typescript
@Entity('performanceMetrics')
export class PerformanceMetrics {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ApiProperty()
  @Column('int')
  elapsed_time: number;

  @ApiProperty()
  @Column('int')
  memory_usage: number;

  @ApiProperty()
  @Column('text')
  memo: string;
}
```

</div>
</details>

---

**필드:**

- **id (문자열, 주요키, 외래키 > User.id):** 고유 식별자 (사용자 ID와 동일).
- **elapsed_time (정수):** 소요된 시간, 밀리초로 표시될 수 있음.
- **memory_usage (정수):** 메모리 사용량, 바이트로 표시될 수 있음.
- **number (정수):** 설명 필드 또는 기타 정보.

---
