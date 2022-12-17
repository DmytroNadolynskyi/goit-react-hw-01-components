// import PropTypes from 'prop-types';

export default function Statistics({ stats, title }) {
  
return(
  <section class="statistics">
    {title && <h2>{ title}</h2>}

    <ul class="stat-list">
     {stats.map(e => (<li class="item" key={e.id}>
        <span class="label">{e.label}</span>
        <span class="percentage">{e.percentage}%</span>
      </li>))}
      
      
    </ul>
  </section>
)}