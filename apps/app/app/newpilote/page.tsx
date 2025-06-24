"use client";

import React from "react";
import { title } from "@/components/primitives";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";

export default function NewPilotePage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
            <h1 className={title()}>New Pilote</h1>
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
                    errorMessage="Please enter a name"
                    label="Pilote Name"
                    labelPlacement="outside"
                    name="name"
                    placeholder="Enter the name of the pilote"
                    type="text"
                />

                <Input
                    isRequired
                    errorMessage="Please enter a car"
                    label="Car"
                    labelPlacement="outside"
                    name="car"
                    placeholder="Enter the pilote's car"
                    type="text"
                />

                <div className="w-full flex gap-2 justify-end mt-2">
                    <Button color="primary" type="submit">
                        Submit
                    </Button>
                </div>

                </Form>
            </CardBody>
        </Card>
    </section>
  );
}
