import { memo, useCallback, useState } from 'react';

export const MemoExamplePage = () => {
  return (
    <div>
      <h1>Результаты</h1>
      <Table />
    </div>
  );
};

interface RowData {
  id: number;
  name: string;
  place: number;
}

function Table() {
  // Массив данных для отображения в таблице
  const [tabelData, setTableData] = useState([
    { id: 1, name: 'Федор Смолов', place: 1 },
    { id: 2, name: 'Матвей Сафонов', place: 2 },
    { id: 3, name: 'Антон Заболотный', place: 3 },
    { id: 4, name: 'Дмитрий Баринов', place: 4 },
    { id: 5, name: 'Ренат Жемалетдинов', place: 5 },

    { id: 6, name: 'Наталья Романова', place: 1 },
    { id: 7, name: 'Мария Синицина', place: 2 },
    { id: 8, name: 'Ольга Медведева', place: 3 },
    { id: 9, name: 'Светлана Шунина', place: 4 },
    { id: 10, name: 'Лидия Васильева', place: 5 },

    
  ]);

  // Состояние для хранения выбранных строк таблицы
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState('');
  // Функция для выбора строки
  const handleRowClick = useCallback((id: number) => {
    setSelectedRows(prev => {
      const selectedIndex = prev.indexOf(id);
      if (selectedIndex === -1) {
        return [...prev, id];
      } else {
        const updatedRows = [...prev];
        updatedRows.splice(selectedIndex, 1);
        return updatedRows;
      }
    });

    // const selectedIndex = selectedRows.indexOf(id);
    // if (selectedIndex === -1) {
    //   setSelectedRows([...selectedRows, id]);
    // } else {
    //   const updatedRows = [...selectedRows];
    //   updatedRows.splice(selectedIndex, 1);
    //   setSelectedRows(updatedRows);
    // }
  }, []);

  console.log('render table');

  return (
    <>
      <input type="text" value={inputValue} onChange={evt => setInputValue(evt.target.value)} />
      <button
        onClick={() => {
          setTableData(prev => [...prev, { id: prev.length + 1, name: inputValue, place: 30 }]);
        }}
      >
        Add user
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {tabelData.map(row => (
            <OptimizedRow
              key={row.id}
              handleRowClick={handleRowClick}
              {...row}
              selected={selectedRows.includes(row.id)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

type RowProps = {
  selected: boolean;
  handleRowClick: (id: number) => void;
} & RowData;

const tooLongTask = (arg: boolean) => {
  console.log('task calculation');

  let i = 0;
  while (i < 100000000) {
    i++;
  }
  return 'done';
};

const Row = (props: RowProps) => {
  //   const a = useMemo(() => tooLongTask(props.selected), [props.selected]);

  tooLongTask(props.selected);

  console.log('row render');
  return (
    <tr
      onClick={() => props.handleRowClick(props.id)}
      style={{ backgroundColor: props.selected ? 'lightblue' : 'white' }}
    >
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.place}</td>
    </tr>
  );
};

const OptimizedRow = memo(Row);
