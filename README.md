# 🔎 XSearch
XSearch는 제조 데이터 분석을 위한 유사 이미지 검색 엔진 서비스이다.   
사용자는 웹브라우저에 접속하여 손쉽게 서비스를 사용할 수 있다.

## 📋 Table of Contents
+ [About](#about)
+ [Architecture](#architecture)
  + [Frontend](#frontend---상세보기-wiki-페이지)
  + [Backend](#backend---상세보기-wiki-페이지)
  + [Engine](#engine---상세보기-wiki-페이지)
+ [Works](#works)
+ [Technology](#technology)

## 📁 About
XSearch는 사용자가 입력한 이미지 데이터와 유사한 이미지를 데이터셋에서 검색하여 웹브라우저로 보여준다.   
현장에서 작업자가 부품 및 자재에 대한 정보를 쉽게 찾을 수 있는 웹 서비스를 제공할 수 있다.

XSearch의 전체적인 작동방식은 다음과 같다.
## 📚 Architecture

### 🌐 Frontend - [상세보기 wiki 페이지](https://github.com/korone00/xsearch/wiki/Architecture#frontend-%EC%A0%95%EC%9B%85-%EA%B0%80%EC%9D%80)
사용자가 접근할 수 있는 웹페이지를 제공한다.   
SveltKit과 Tailwind를 이용하여 제작하였다.
### 💾 Backend - [상세보기 wiki 페이지](https://github.com/korone00/xsearch/wiki/Architecture#backend)
사용자 정보 및 데이터셋에 대한 관리를 한다.    
NestJs를 이용하였고 Postgres DB와 Minio Storage를 함께 사용하였다.
### ⚡ Engine - [상세보기 wiki 페이지](https://github.com/korone00/xsearch/wiki/Architecture#engine)
이미지 데이터 셋을 Vectorize 및 Feature extraction을 진행하여 Vector DB에 저장한다. 사용자가 제공하는 이미지에 대해서도 똑같은 과정을 거쳐 유사한 이미지를 검색한다. Python과 Milvus DB, towhee Library를 사용하였다.
## Works - [상세보기 wiki 페이지]()
작동방식설명
## Technology - [상세보기 wiki 페이지](https://github.com/korone00/xsearch/wiki/Technology)
+ CI/CD using Docker and Github Action
+ JWT Auth process
+ Minio online storage for manage image dataset
+ Image Embedding process
+ Feature extraction using ResNet 50
+ Similar image search using L2
+ Statistics
