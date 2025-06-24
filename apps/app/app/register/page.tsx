"use client";

import React from "react";
import { title } from "@/components/primitives";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";

export default function RegisterPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
            <h1 className={title()}>Register</h1>
        </div>
        <Card className="flex gap-3 mt-8 p-3">
            <CardBody>
                <Form
                    className="w-full max-w-xs flex flex-col gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >

                <Input
                    isRequired
                    errorMessage="Please enter a stable name"
                    label="Stable Name"
                    labelPlacement="outside"
                    name="name"
                    placeholder="Enter your stable name"
                    type="text"
                />

                <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                />

                <Input
                    isRequired
                    errorMessage="Please enter your password"
                    label="Password"
                    labelPlacement="outside"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                />
                
                <Input
                    isRequired
                    errorMessage="Please enter your password"
                    label="Confirm password"
                    labelPlacement="outside"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    type="password"
                />

                <div className="w-full flex gap-2 justify-end my-2">
                    <Button color="primary" type="submit">
                        Submit
                    </Button>
                </div>

                <div className="w-full flex gap-2 justify-end">
                    <span>Already have an account ? <NextLink className="text-primary" href={siteConfig.auth.login.href}>{siteConfig.auth.login.label}</NextLink></span>
                </div>

                </Form>
            </CardBody>
        </Card>
    </section>
  );
}
