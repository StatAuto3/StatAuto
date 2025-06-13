"use client";

import React from "react";
import { title } from "@/components/primitives";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";

export default function LeaderboardPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
            <h1 className={title()}>Leaderboard</h1>
        </div>

        <Table aria-label="Example static collection table" className="mt-8">
        <TableHeader>
            <TableColumn>STABLE</TableColumn>
            <TableColumn>PILOTE</TableColumn>
            <TableColumn>WINS</TableColumn>
        </TableHeader>
        <TableBody>
            <TableRow key="1">
            <TableCell>Template</TableCell>
            <TableCell>Template</TableCell>
            <TableCell>3</TableCell>
            </TableRow>
            <TableRow key="2">
            <TableCell>Template</TableCell>
            <TableCell>Template</TableCell>
            <TableCell>2</TableCell>
            </TableRow>
            <TableRow key="3">
            <TableCell>Template</TableCell>
            <TableCell>Template</TableCell>
            <TableCell>0</TableCell>
            </TableRow>
            <TableRow key="4">
            <TableCell>Template</TableCell>
            <TableCell>Template</TableCell>
            <TableCell>0</TableCell>
            </TableRow>
        </TableBody>
        </Table>

    </section>
  );
}
