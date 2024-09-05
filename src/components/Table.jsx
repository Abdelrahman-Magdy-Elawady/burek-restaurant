export default function Table({ caption, header, body, footer, styles }) {
  const headerList = header.map((head) => (
    <th key={head} className={styles.header}>
      {head}
    </th>
  ));
  const bodyList = body.map((row, index) => (
    <tr key={index}>
      {Object.values(row).map((col) => (
        <td key={col} className={styles.body}>
          {col}
        </td>
      ))}
    </tr>
  ));
  const footerList = footer?.map((cell, index) => (
    <td
      key={index}
      className={styles.footer}
      colSpan={cell?.spans?.col}
      rowSpan={cell?.spans?.row}
    >
      {cell.content}
    </td>
  ));

  //----------------------------------------------------
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        {" "}
        <h1>{caption}</h1>{" "}
      </caption>
      <thead>
        <tr>{headerList}</tr>
      </thead>
      <tbody>{bodyList}</tbody>
      <tfoot>
        <tr>{footerList}</tr>
      </tfoot>
    </table>
  );
}
