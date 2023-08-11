export const load = async ({ parent }: any) => {
	console.log(await parent());
	// 문제 발생 ... parent는 layout의 정보만 받아 온다...

	//return userInfo;
};
