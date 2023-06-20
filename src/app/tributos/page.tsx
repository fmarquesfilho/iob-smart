import { Card, Title, Text } from '@tremor/react';
import { queryBuilder } from '../../lib/planetscale';
import Search from './search';
import TributosTable from './table';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {

  const search = searchParams.q ?? '';
  const tributos = await queryBuilder
    .selectFrom('tributos')
    .select(['tributo_id','razao_social_empresa', 'tributo_nome', 'tributo_valor'])
    .where('razao_social_empresa', 'like', `%${search}%`)
    .execute();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Tributos</Title>
      <Text>Lista de tributos à pagar.</Text>
      <Search />
      <Card className="mt-6">
        <TributosTable tributos={tributos} />
      </Card>
    </main>
  );
}
