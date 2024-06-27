import { memo, useCallback, useState } from 'react';

export const MemoExamplePage = () => {
  return (
    <div>
      <h1>Участники</h1>
      <Table />
    </div>
  );
};

interface RowData {
  id: number;
  name: string;
  age: number;
}

function Table() {
  // Массив данных для отображения в таблице
  const [tabelData, setTableData] = useState([
    { id: 1, name: 'Федотов Артемий Юрьевич', age: 198 },
    { id: 2, name: 'Смольникова Наталья Федоровна', age: 175 },
    { id: 3, name: 'Андреева Елена Геннадьевна', age: 172 },
    { id: 4, name: 'Репин Андрей Валерьевич', age: 161 },
    { id: 5, name: 'Антонов Михаил Юрьевич', age: 157 },
    { id: 6, name: 'Ареева Наталья Борисовна', age: 149 },
    { id: 7, name: 'Никитин Роман Сергеевич', age: 144 },
    { id: 8, name: 'Романов Денис Александрович', age: 136 },
    { id: 9, name: 'Рюкзакова Людмила Алексеевна', age: 128 },
    { id: 10, name: 'Сокольникова Лана Андреевна', age: 122 },
    { id: 11, name: 'Ястребов Александр Игоревич', age: 119 },
    { id: 12, name: 'Ермолаева Елена Васильевна', age: 115 },
    { id: 13, name: 'Стрельцов Вадим Анатольевич', age: 109 },
    { id: 14, name: 'Рассказова Алина Витальевна', age: 107 },
    { id: 15, name: 'Юрьев Виталий Андреевич', age: 104 },
    { id: 16, name: 'Логинов Виктор Сергеевич', age: 102 },
    { id: 17, name: 'Рузаева Алена Ивановна', age: 101 },
    { id: 18, name: 'Солнцева Арина Романовна', age: 100 },
    
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
          setTableData(prev => [...prev, { id: prev.length + 1, name: inputValue, age: 100 }]);
        }}
      >
        Добавить участника
      </button>
      <table>
        <thead>
          <tr>
            <th>Номер</th>
            <th>ФИО участника</th>
            <th>Рейтинг</th>
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
      <td>{props.age}</td>
    </tr>
  );
};

const OptimizedRow = memo(Row);
