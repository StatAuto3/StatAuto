"use client";

import { Card, CardBody, CardHeader } from '@heroui/card';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/table';
import { useParams } from 'next/navigation'
import { title } from "@/components/primitives";

export default function StablePage() {
  const { id } = useParams();

  return (
    <div>
      <h1 className={title({ size: 'sm' })}>Stable {id}</h1>
      <Card className='mt-5 mb-10'>
        <CardBody>Stable's description</CardBody>
      </Card>

      <h1 className={title({ size: 'sm' })}>Pilotes</h1>
      <div className='flex mt-5'>
      <Table aria-label="Example static collection table">
          <TableHeader>
              <TableColumn>PILOTE</TableColumn>
              <TableColumn>WINS</TableColumn>
          </TableHeader>
          <TableBody>
              <TableRow key="1">
                  <TableCell>Template</TableCell>
                  <TableCell>3</TableCell>
              </TableRow>
          </TableBody>
      </Table>
      </div>
    </div>
  );
}
