import 'server-only';
import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface Tributo {
  tributo_id: number;
  razao_social_empresa: string;
  tributo_nome: string;
  tributo_valor: number;
}

interface Database {
  tributos: Tributo;
  // https://github.com/nextauthjs/next-auth/issues/4922
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL
  })
});