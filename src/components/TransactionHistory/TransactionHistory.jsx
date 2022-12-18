import PropTypes from 'prop-types';
 import {Table,
  Head,
  Th,
  Tr,
  Td, } from'./TransactionHistory.styled'

export default function TransactionHistory({items }) {
  return(
  <Table>
    <Head>
      <Tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </Tr>
    </Head>

      <tbody>
        {items.map(item => (
      <Tr key={item.id}>
        <Td>{item.type}</Td>
        <Td>{item.amount}</Td>
        <Td>{item.currency}</Td>
      </Tr>
      ))}
    </tbody>
  </Table>
)}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(
    {
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })).isRequired,
  
};
