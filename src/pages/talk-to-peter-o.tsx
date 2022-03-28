import type { NextPage } from 'next'


const PeterOZoom: NextPage = () => {
  return (
    <></>
  )
}

PeterOZoom.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(301, {
      Location: 'https://us05web.zoom.us/j/3073142774?pwd=RDIxNlFybzRuZGlaaFNoMU9JWmdDQT09'
    });
    res.end();
  }

  return {};
};

export default PeterOZoom
