const List = (props) => {
  const { list } = props;

  return (
    <div className="flex flex-col px-2">
      {list.map((item) => (
        <div key={item} className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold">{item.org}</h3>
          <p>{item.desc}</p>
          <p>{item.period}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
