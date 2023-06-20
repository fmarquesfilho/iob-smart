"use client";

import {
  Card,
  Grid,
  Metric,
  Title,
  Flex,
  Icon,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
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
    metric: "$ 23,456,456",
    icon: TicketIcon,
    color: "indigo",
  },
  {
    title: "Despesa",
    metric: "$ 13,123",
    icon: TrashIcon,
    color: "fuchsia",
  },
  {
    title: "Tributos",
    metric: "456",
    icon: UserGroupIcon,
    color: "amber",
  },
];

const data = [
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  // ...
  {
    Month: "Jan 22",
    Sales: 3890,
    Profit: 2980,
  },
];

export default function DashboardExample() {
  // 
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
                <Title>Performance</Title>
                <Text>Comparison between Sales and Profit</Text>
                <AreaChart
                  className="mt-4 h-80"
                  data={data}
                  categories={["Sales", "Profit"]}
                  index="Month"
                  colors={["indigo", "fuchsia"]}
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
