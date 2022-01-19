import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Form } from "@unform/web";

import { AiFillEye, AiFillEyeInvisible, AiFillBell } from "react-icons/ai";
import { BiHappyBeaming } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

import style from "../styles/Home.module.scss";
import LoginIcon from "../../public/assets/login.svg";
import { ButtonSubmit } from "../components/utility/Button";
import { InputComponent } from "../components/utility/ComponentInput";
import Link from "next/link";

export default function Home() {
  const [password, setPassword] = useState("password");
  const [remenber, setRemenber] = useState(false);
  const formRef = useRef();

  function handleLogin(data) {
    if (remenber) {
      localStorage.setItem(`login:Remenber`, JSON.stringify(data));
      return;
    }
  }
  function handleSetPassword() {
    setPassword("password");
  }
  function handleSetText() {
    setPassword("text");
  }

  return (
    <div className={style.container}>
      <Head>
        <title>Login | Shoope</title>
      </Head>
      <div className={style.containerContent}>
        <div>
          <Image
            src={LoginIcon}
            alt="image login"
            width={500}
            height={500}
            title="store image"
          />
        </div>
        <div className={style.contentRight}>
          <div className={style.ContainerTextTop}>
            <div className={style.containerTitle}>
              <h1>Welcome Back!</h1>
              <BiHappyBeaming />
            </div>
            <div className={style.contentParagraphy}>
              <p>
                To keep connected with us please login with your personal
                information by email addres and password
                <AiFillBell />
              </p>
            </div>
          </div>
          <div className={style.containerForm}>
            <Form onSubmit={handleLogin} ref={formRef} className={style.form}>
              <main>
                <div>
                  <div className={style.containerInput}>
                    <label htmlFor="email">
                      <HiOutlineMail />
                    </label>
                    <InputComponent
                      name="name"
                      placeholder="name"
                      type="email"
                      label="email"
                      id="email"
                    />
                  </div>
                  <div className={style.containerInput}>
                    <label htmlFor="password">
                      <RiLockPasswordLine />
                    </label>
                    <InputComponent
                      name="password"
                      placeholder="password"
                      type={password}
                      label="password"
                      minLength="5"
                      maxLength="8"
                      id="password"
                    />
                    {password === "password" ? (
                      <AiFillEye
                        onClick={handleSetText}
                        className={style.eye}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        onClick={handleSetPassword}
                        className={style.eye}
                      />
                    )}
                  </div>
                  <div className={style.link}>
                    <div>
                      <input
                        type="checkbox"
                        id="box"
                        onClick={() => setRemenber(!remenber)}
                      />
                      <label htmlFor="box">remenber</label>
                    </div>
                    <a>forgout password?</a>
                  </div>
                </div>
                <div className={style.containerButtons}>
                  <div>
                    <ButtonSubmit text="Login Now" type="submit" />
                  </div>
                  <Link href="./createNewcount">
                    <a className={style.btnCreate}>
                      <ButtonSubmit text="Create Account" type="button" />
                    </a>
                  </Link>
                </div>
              </main>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
