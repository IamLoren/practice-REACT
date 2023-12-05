export const FilterUserPos = ({ handleChangeFilter }) => {
  return (
    <div>
      <button onClick={() => handleChangeFilter('dev')}>dev</button>
      <button onClick={() => handleChangeFilter('qa')}>qa</button>
      <button onClick={() => handleChangeFilter('hr')}>hr</button>
    </div>
  )
};