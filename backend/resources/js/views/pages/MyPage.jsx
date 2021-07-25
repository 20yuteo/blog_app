import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { Overlay } from '../atoms/Overlay/Overlay';
import { ProfileImage } from '../atoms/Image/ProfileImage';
import BaseButton from '../atoms/buttons/BaseButton';
import PageTitle from '../atoms/Title/PageTitle';
import { ProfileSection } from '../styles/element';
import { useForm } from "react-hook-form";
import UserImageForm from '../molecules/Card/UserImageForm';
import { ProfileForm } from '../molecules/Card/ProfileForm';
import CloseLink from '../atoms/Links/CloseLink';
import ProfileFormWrapper from '../molecules/Card/ProfileFormWrapper';
import NameTag from '../atoms/Profile/NameTag';
import Section from '../organisms/Profile/Section';

const MyPage = () => {

    const selector = useSelector((state) => state);

    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    const [show, setShow] = useState(false);

    return (
        <div>
            <PageTitle>
                MyPage
            </PageTitle>
            <ProfileSection>
                <ProfileImage src={selector.users.image_url} />
                <NameTag>{ selector.users.name }</NameTag>
                <div>
                    <BaseButton type="button" minWidth={8} minHeight={2} paddingTop={1.2} paddingLeft={3} onClick={() => setShow(true)}>Edit</BaseButton>
                    { show ? <Overlay>
                                <Section>
                                    <CloseLink onClick={() => setShow(false) }>×</CloseLink>
                                    <ProfileFormWrapper>
                                        <UserImageForm register={register} watch={watch} userImage={selector.users.image_url} handleSubmit={handleSubmit} />
                                        <ProfileForm register={register} watch={watch} handleSubmit={handleSubmit} />
                                    </ProfileFormWrapper>
                                </Section>
                            </Overlay> : <span /> }
                </div>
            </ProfileSection>
        </div>
    );
}

export default MyPage