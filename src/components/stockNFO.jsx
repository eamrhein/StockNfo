import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';
import styled from 'styled-components';
import About from './about';

// styles
const StockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  bottom: 5vw;
`;
const ToolWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.navbar};
  padding: 0.5rem;
  strong {
    font-weight: bolder;
  }
`;
const ChartWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  padding: 1rem;
  margin: 1rem;
`;
const CompanyName = styled.h1`
  text-align: center;
  line-height: 42px;
  font-size: 36px;
  font-weight: 500;
`;
const Price = styled.h2`
  font-size: 36px;
  font-weight: 400;
  line-height: 42px;
  margin-left: 1rem;
`;
const ChangeStyle = styled.div`
  margin-left: 1rem;
`;
const RangeGroup = styled.div`
  cursor: pointer;
  display: flex;
  font-weight: 600;
  margin-left: 1rem;
  #active {
    color: #B15DFF;
  }
`;
const RangeBtn = styled.div`
  font-size: 0.8rem;
  margin: 0rem 0.25rem;
`;
const Img = styled.img`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  max-width: 40px;
  width: 100%;
  height: auto;
`;

// Chart Tooltip
const CustomToolTip = (props) => {
  const { payload, label } = props;
  return (
    <ToolWrapper>
      <p>
        <strong>Date: </strong>
        {label}
      </p>
      <h4>
        <strong>Price: </strong>
        {payload[0] ? payload[0].name + payload[0].value : null}
      </h4>
    </ToolWrapper>
  );
};

// Renders Line Chart
const LineChartComponent = (props) => {
  const { chartState } = props;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartState} width={400} height={400}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis domain={['dataMin', 'dataMax']} hide />
        <XAxis hide dataKey="label" />
        <Legend />
        <Line
          connectNulls
          name="USD $"
          type="monotone"
          dot={false}
          dataKey="close"
          strokeWidth={2.5}
          stroke="#B15DFF"
        />
        <Tooltip
          content={<CustomToolTip />}
          separator=""
          offset={-40}
          position={{ y: -15 }}
          isAnimationActive
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
// Calculate % change of stock
const Change = (stocks, current, range) => {
  let rangeStr = '';
  let diff;
  let percent;
  const parseChange = (method) => {
    const currentPrice = parseFloat(stocks[current].latestPrice);
    percent = parseFloat(stocks[current][method]);
    const prevPrice = currentPrice - currentPrice * percent;
    percent = (percent * 100).toFixed(2);
    diff = (currentPrice - prevPrice).toFixed(2);
    return [diff, percent];
  };
  switch (range) {
    case '1D':
      [diff, percent] = parseChange('changePercent');
      rangeStr = ' Today';
      break;
    case '1M':
      [diff, percent] = parseChange('month1ChangePercent');
      rangeStr = ' Past Month';
      break;
    case '3M':
      [diff, percent] = parseChange('month3ChangePercent');
      rangeStr = ' Past 3 Months';
      break;
    case '1Y':
      [diff, percent] = parseChange('year1ChangePercent');
      rangeStr = ' Past Year';
      break;
    case '5Y':
      [diff, percent] = parseChange('year5ChangePercent');
      rangeStr = ' Past 5 Years';
      break;
    default:
      break;
  }
  const sign = Math.sign(diff) === 1 ? '+' : null;
  return (
    <ChangeStyle>
      <span>
        {sign}
          $
        {diff}
        {' '}
          (
        {percent}
              %)
      </span>
      <span>{rangeStr}</span>
    </ChangeStyle>
  );
};

// Main Component

const Stock = ({ stocks, fetchStockChart, current }) => {
  const [chartState, setChartState] = useState([]);
  const [company, setCompany] = useState('');
  const [price, setPrice] = useState('');
  const [range, setRange] = useState('5Y');
  const [change, setChange] = useState('');
  const [logo, setLogo] = useState('');
  useEffect(() => {
    fetchStockChart(current, range);
  }, [fetchStockChart, range, current]);

  useEffect(() => {
    if (stocks[current]) {
      setChange(<Change stocks={stocks} range={range} current={current} />);
      setLogo(stocks[current].logo);
      setChartState(range === '1D' ? stocks[current].intraday : stocks[current].chart);
      setCompany(stocks[current].securityName);
      setPrice(stocks[current].latestPrice.toFixed(2));
    }
  }, [stocks, current, range]);
  // hangle chart toggle element
  const handleRange = (e) => {
    const text = e.target.innerText;
    switch (text) {
      case '1D':
        setRange('1D');
        setChartState(stocks[current].intraday);
        break;
      case '1M':
        setRange('1M');
        setChartState(stocks[current].chart);
        break;
      case '3M':
        setRange('3M');
        setChartState(stocks[current].chart);
        break;
      case '1Y':
        setRange('1Y');
        setChartState(stocks[current].chart);
        break;
      case '5Y':
        setRange('5Y');
        setChartState(stocks[current].chart);
        break;
      default:
        break;
    }
  };

  return (
    <StockWrapper>
      <CompanyName>
        {company}
      </CompanyName>
      <Price>
        {logo ? (<Img alt="company-logo" src={logo} />) : null}
       $
        {price}
      </Price>
      {change}
      <ChartWrapper>
        <LineChartComponent chartState={chartState} />
        <RangeGroup>
          <RangeBtn id={range === '1D' ? 'active' : null} onClick={handleRange}>
          1D
          </RangeBtn>
          <RangeBtn id={range === '1M' ? 'active' : null} onClick={handleRange}>
          1M
          </RangeBtn>
          <RangeBtn id={range === '3M' ? 'active' : null} onClick={handleRange}>
          3M
          </RangeBtn>
          <RangeBtn id={range === '1Y' ? 'active' : null} onClick={handleRange}>
          1Y
          </RangeBtn>
          <RangeBtn id={range === '5Y' ? 'active' : null} onClick={handleRange}>
          5Y
          </RangeBtn>
        </RangeGroup>
      </ChartWrapper>
      <About stock={stocks[current]} />
    </StockWrapper>
  );
};
Stock.defaultProps = {
  stocks: {},
};
Stock.propTypes = {
  current: PropTypes.string.isRequired,
  fetchStockChart: PropTypes.func.isRequired,
  stocks: PropTypes.shape({}),
};
export default Stock;
