import { Table } from "antd"
import Column from "antd/es/table/Column"

export function RoutesTable() {

    type TTableData = {
        routeName: string,
        routes: number[][]
    }

    const data: TTableData[] = [
        {
            routeName: 'Маршрут №1',
            routes: [
                [59.84660399, 30.29496392],
                [59.82934196, 30.42423701],
                [59.83567701, 30.38064206],
            ]
        },
        {
            routeName: 'Маршрут №2',
            routes: [
                [59.82934196, 31.42423701],
                [59.82761295, 31.41705607],
                [59.84660399, 31.29496392],
            ]
        },
        {
            routeName: 'Маршрут №3',
            routes: [
                [59.83567701, 30.38064206],
                [59.84660399, 30.29496392],
                [59.82761295, 30.41705607],
            ]
        },
    ]

    const dataSource = data.map((item, index) => ({
        key: index,
        routeName: item.routeName,
        point1: item.routes[0].join(', '),
        point2: item.routes[1].join(', '),
        point3: item.routes[2].join(', ')
    }))


    return (
        <Table dataSource={dataSource}
            rowSelection={{ type: 'radio' }}
        >
            <Column title="Маршрут" dataIndex="routeName" key="routeName" />
            <Column title={'Точка 1 (lat, lng)'} dataIndex="point1" key="point1" />
            <Column title={'Точка 2 (lat, lng)'} dataIndex="point2" key="point2" />
            <Column title={'Точка 3 (lat, lng)'} dataIndex="point3" key="point3" />
        </Table>
    )
}
