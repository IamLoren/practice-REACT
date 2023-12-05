export const FilterUserPos = ({ handleChangeFilter, btnsArrayPosition }) => {

  return (
    <div>
      {btnsArrayPosition.map(btn => {
        return <button key={btn} onClick={() => handleChangeFilter(btn)}>{btn}</button>
      })}
    </div>
  )
};