"use client";
import { queryBuilder } from '../lib/planetscale';

import {
  Card,
  Grid,
  Metric,
  Title,
  Flex,
  Icon,
  Text,
  Color,
  AreaChart,
} from "@tremor/react";

// import heroicons react components
import { TicketIcon, UserGroupIcon, TrashIcon } from "@heroicons/react/24/solid";

const categories: {
  title: string;
  metric: string;
  icon: any;
  color: Color;
}[] = [
  {
    title: "Receita",
    metric: "R$ 23.456,85",
    icon: TicketIcon,
    color: "indigo",
  },
  {
    title: "Despesa",
    metric: "R$ 13.123,45",
    icon: TrashIcon,
    color: "fuchsia",
  },
  {
    title: "Tributos",
    metric: "R$ 1,234,56",
    icon: UserGroupIcon,
    color: "amber",
  },
];

const data = [
  {
    Month: "Jan 21",
    Receita: 2890,
    Despesa: 2400,
    Tributos: 2400,
  },
  {
    Month: "Feb 21",
    Receita: 1800,
    Despesa: 1398,
    Tributos: 2210,
  },
  {
    Month: "Jan 22",
    Receita: 490,
    Despesa: 980,
    Tributos: 2290,
  },
  {
    Month: "Feb 22",
    Receita: 3490,
    Despesa: 4300,
    Tributos: 2100,
  },
];

export default async function DashboardExample() {
  return (
    <main className="px-12 py-12">
          <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
            {categories.map((item) => (
              <Card key={item.title} decoration="top" decorationColor={item.color}>
                <Flex justifyContent="start" className="space-x-4">
                  <Icon icon={item.icon} variant="light" size="xl" color={item.color} />
                  <div className="truncate">
                    <Text>{item.title}</Text>
                    <Metric className="truncate">{item.metric}</Metric>
                  </div>
                </Flex>
              </Card>
            ))}
          </Grid>
            <div className="mt-6">
              <Card>
                <Title>Balanço Financeiro</Title>
                <Text>Comparação entre Receita, Despesa e Tributos</Text>
                <AreaChart
                  className="mt-4 h-80"
                  data={data}
                  categories={["Receita", "Despesa", "Tributos"]}
                  index="Month"
                  colors={["indigo", "fuchsia", "amber"]}
                  yAxisWidth={60}
                  valueFormatter={(number: number) =>
                    `$ ${Intl.NumberFormat("us").format(number).toString()}`
                  }
                />
              </Card>

            </div>
    </main>
  );
}
