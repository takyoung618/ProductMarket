import { OmitProps } from "antd/lib/transfer/ListBody";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";
import * as S from "./MyPage.styles";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";


export default function MyPagePresenter(props: any) {
    const UserInfo = getUserInfo();

    return (
       <form onSubmit = {props.handleSubmit(props.onClickUpdateButton)}> 
            <S.Wrapper>
                <S.ProfileWrapper>
                    {props.fileUrl ? (
                        <S.ProfileImage 
                        src={`https://storage.googleapis.com/${props.fileUrl}`}
                        onClick={props.onClickUpload}
                        />
                        ) : (
                        <S.PhotoInput
                            src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn?.picture}`}
                            onClick={props.onClickUpload}
                            onError={props.handleImageError}
                        >
                        </S.PhotoInput>
                        )}
                        <S.UploadFileHidden
                            type="file"
                            ref={props.fileRef}
                            onChange={props.onChangeFile}
                        >
                        </S.UploadFileHidden>
                    
                    <S.UserWrapper>
                        <S.UserId onChange={props.onChangeName}>{UserInfo?.fetchUserLoggedIn.name}</S.UserId>
                        <S.ImageWrapper>
                            <S.ImageEditBtn
                                // onClick={props.onClickUpdateButton}
                                type="submit"
                            >
                            이미지 변경</S.ImageEditBtn>
                            <S.ImageDeleteBtn 
                                onClick={props.onClickImageDelete}
                                // type="button"
                            >삭제</S.ImageDeleteBtn>
                        </S.ImageWrapper>
                    </S.UserWrapper>
                </S.ProfileWrapper>
                <S.HeaderWrapper>
                    <S.LoginHeader>
                        로그인 정보
                    </S.LoginHeader>
                </S.HeaderWrapper>
                <S.LoginWrapper>
                    <S.ColumnWrapper>
                        <S.EmailWrapper>
                            <S.EmailTitle>이름</S.EmailTitle>
                            <S.InfoWrapper>
                                <S.Email
                                    defaultValue={props.data?.fetchUserLoggedIn?.name}
                                    {...props.register("name")}
                                    onChange={props.onChangeName}
                                />
                                <S.ImageDeleteBtn 
                                // onClick={props.onClickUpdateButton}
                                type="submit"
                                >
                                변경</S.ImageDeleteBtn>
                            </S.InfoWrapper>
                        
                        </S.EmailWrapper>
                        <S.ErrorMessage>
                            {props.formState.errors.name?.message}
                        </S.ErrorMessage>               
                    </S.ColumnWrapper>
                    
                    <S.ColumnWrapper>
                        <S.EmailWrapper>
                            <S.EmailTitle>비밀번호</S.EmailTitle>
                            <S.InfoWrapper>
                                <S.Email
                                    onChange={props.onChangePassword}
                                    // type='password'
                                    placeholder="*******"
                                />
                                <S.ImageDeleteBtn 
                                    onClick={props.onClickResetPassword}
                                    type="button"
                                >변경</S.ImageDeleteBtn>
                            </S.InfoWrapper>
                        </S.EmailWrapper>
                                      
                    </S.ColumnWrapper>

                </S.LoginWrapper>
                <S.InfoHeader>
                    내 게시글
                </S.InfoHeader>
                <S.ProductListWrapper>
                    {/* {props.data?.fetchUseditems.slice(0,8).map((el : any) => (    */}
                        <S.ProductWrapper>
                            <S.Image
                            />
                            <S.PriceWrapper>
                                <S.Tag>태그</S.Tag>
                            </S.PriceWrapper>
                            <S.ProductName>이름</S.ProductName>
                            <S.Price>111원</S.Price>
                            <S.PriceTag>즉시 구매가</S.PriceTag>
                        </S.ProductWrapper>
                    {/* ))}     */}
                        <S.ProductWrapper>
                            <S.Image
                            />
                            <S.PriceWrapper>
                                <S.Tag>태그</S.Tag>
                            </S.PriceWrapper>
                            <S.ProductName>이름</S.ProductName>
                            <S.Price>111원</S.Price>
                            <S.PriceTag>즉시 구매가</S.PriceTag>
                        </S.ProductWrapper>
                        <S.ProductWrapper>
                            <S.Image
                            />
                            <S.PriceWrapper>
                                <S.Tag>태그</S.Tag>
                            </S.PriceWrapper>
                            <S.ProductName>이름</S.ProductName>
                            <S.Price>111원</S.Price>
                            <S.PriceTag>즉시 구매가</S.PriceTag>
                        </S.ProductWrapper>
                        <S.ProductWrapper>
                            <S.Image
                            />
                            <S.PriceWrapper>
                                <S.Tag>태그</S.Tag>
                            </S.PriceWrapper>
                            <S.ProductName>이름</S.ProductName>
                            <S.Price>111원</S.Price>
                            <S.PriceTag>즉시 구매가</S.PriceTag>
                        </S.ProductWrapper>
                        <S.ProductWrapper>
                            <S.Image
                            />
                            <S.PriceWrapper>
                                <S.Tag>태그</S.Tag>
                            </S.PriceWrapper>
                            <S.ProductName>이름</S.ProductName>
                            <S.Price>111원</S.Price>
                            <S.PriceTag>즉시 구매가</S.PriceTag>
                        </S.ProductWrapper>
                </S.ProductListWrapper>

            </S.Wrapper>
        </form>
    )
}