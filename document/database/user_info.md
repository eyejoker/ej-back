```sql
-- EXTENSION
CREATE EXTENSION "uuid-ossp";

-- 로그인 정보 관리
create table if not exists user_info (
	user_seq UUID PRIMARY KEY DEFAULT uuid_generate_v4() constraint user_info_pk unique,
	user_id varchar(64) not null,
	user_pwd varchar(256) not null,
	user_nick varchar(128) not null,
	user_level int default 1 not null,
	user_role bpchar(1) default '1' not null,
	user_email varchar(256) not null,
	user_crt_dtm timestamp default now() not null,
	user_stat_cd varchar(4) default '0000' not null,
	user_zipcode CHARACTER VARYING(64) DEFAULT NULL,
	user_address TEXT DEFAULT NULL,
	user_detail_address TEXT DEFAULT NULL,
	del_fl bpchar(1) default '1' not null
);

comment on table user_info is '유저 정보 테이블';
comment on column user_info.user_seq is '고유 번호 uuid v4 사용';
comment on column user_info.user_id is '아이디 - ';
comment on column user_info.user_pwd is '패스워드';
comment on column user_info.user_nick is '닉네임';
comment on column user_info.user_level is '유저 고유 번호';
comment on column user_info.user_role is '유저 등급';
comment on column user_info.user_crt_dtm is '생성 날자';
comment on column user_info.user_zipcode is '우편 번호';
comment on column user_info.user_address is '지번 주소';
comment on column user_info.user_detail_address is '상세 주소';
comment on column user_info.del_fl is '삭제 여부';
comment on column user_info.user_email is '유저 이메일 정보';
comment on column user_info.user_stat_cd is '유저 상태 코드 0000:미인증, 0001:메일인증, 0002: 핸드폰인증, 0004: 모든인증 완료';
```

# 유저 정보 테이블

| 컬럼       | 타입        | Not null | 비고 | 비고                                                                                                       |
| ---------- | ----------- | -------- | ---- | ---------------------------------------------------------------------------------------------------------- |
| user_seq   | char(16)    | Y        |      | uuid v4 사용                                                                                               |
| user_id    | varchar(16) | Y        |      | 사용자 아이디                                                                                              |
| user_pwd   | char(64)    | N        |      | 최대 64자 - sns사용자는 패스워드를 사용하지 않는다.                                                        |
| user_nick  | char(16)    | Y        |      | 사용자 닉네임                                                                                              |
| user_level | int         | Y        |      | 유저 레벨                                                                                                  |
| user_role  | char(1)     | Y        |      | 1: 일반유저, 2: 멤버쉽, 3: 사장님 친구들, 4: , 5: 광고주들, 6: ? , 7: 게시판노예들 8:코딩노예들, 9: 사장님 |
| join_path  | char(16)    | Y        |      | site, google, daum, naver, facebook, instagram 등                                                          |
