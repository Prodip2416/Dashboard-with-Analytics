import { WordCloud } from '@ant-design/plots';

const WordCloudCard=()=> {
    const config = {
        paddingTop: 40,
        height:250,
        data: {
          type: 'fetch',
          value: 'https://assets.antv.antgroup.com/g2/philosophy-word.json',
        },
        layout: { spiral: 'rectangular' },
        colorField: 'text',
      };
  return (
    <div><WordCloud {...config} /></div>
  )
}

export default WordCloudCard