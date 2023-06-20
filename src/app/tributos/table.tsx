import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
  } from '@tremor/react';
  
  interface Tributo {
    tributo_id: number;
    razao_social_empresa: string;
    tributo_nome: string;
    tributo_valor: number;
  }
  
  export default async function TributosTable({ tributos }: { tributos: Tributo[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Razão Social</TableHeaderCell>
            <TableHeaderCell>Tributo</TableHeaderCell>
            <TableHeaderCell>Valor</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {tributos.map((tributo) => (
            <TableRow key={tributo.tributo_id}>
              <TableCell>
                <Text>{tributo.razao_social_empresa}</Text>
              </TableCell>
              <TableCell>
                <Text>{tributo.tributo_nome}</Text>
              </TableCell>
              <TableCell>
                <Text>{tributo.tributo_valor}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  