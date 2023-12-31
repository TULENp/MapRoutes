import { Table } from "antd"
import Column from "antd/es/table/Column"
import { setRoute } from "../../store/reducers/routeSlice"
import { useAppDispatch } from "../../hooks/redux"
import { data } from "../../dataExample/data"
import { useState } from "react"

//* Display table with routes
export function RoutesTable() {
    const dispatch = useAppDispatch()
    const [selectedRowKey, setSelectedRowKey] = useState<number[]>([]) // index of selected row
    
    const dataSource = data.map((item) => ({
        key: item.id,
        routeName: item.routeName,
        point1: item.routes[0].join(', '),
        point2: item.routes[1].join(', '),
        point3: item.routes[2].join(', ')
    }))


    return (
        <>
            <Table dataSource={dataSource}
                
                title={() => <b>Выберите маршрут</b>}
                rowSelection={{ selectedRowKeys: selectedRowKey, type: 'radio' }}
                onRow={(record) => {
                    return {
                        onClick: () => {
                            setSelectedRowKey([record.key])
                            dispatch(setRoute(data[record.key].routes))
                        }
                    }
                }}
            >
                <Column title="Маршрут" dataIndex="routeName" key="routeName" />
                <Column title={'Точка 1 (lat, lng)'} dataIndex="point1" key="point1" />
                <Column title={'Точка 2 (lat, lng)'} dataIndex="point2" key="point2" />
                <Column title={'Точка 3 (lat, lng)'} dataIndex="point3" key="point3" />
            </Table>
        </>
    )
}
