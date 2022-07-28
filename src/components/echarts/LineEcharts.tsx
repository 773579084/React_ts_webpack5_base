import React, { useEffect, useRef } from 'react'
import { IProps } from '@/type'
import { echartsResize } from '@/utils/resize'

/* 按需引入 */
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { TitleComponent, GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// 注册组件
echarts.use([LineChart, TitleComponent, GridComponent, CanvasRenderer])

const Index: React.FC<IProps> = (props) => {
  const chartRef: any = useRef()

  // 每当props改变的时候就会实时重新渲染
  useEffect(() => {
    //#region 解决 react 热更新重复的问题
    let chart = echarts.getInstanceByDom(chartRef.current) as any
    //echart初始化容器
    if (!chart) chart = echarts.init(chartRef.current)
    //#endregion
    let option = {
      //配置项(数据都来自于props)
      title: {
        text: props.title ? props.title : '暂无数据',
      },
      xAxis: {
        type: 'category',
        data: props.xData,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: props.seriesData,
          type: 'line',
        },
      ],
    }

    chart.setOption(option)
    // 图表自适应
    echartsResize(chart)
  }, [props])

  return <div ref={chartRef} style={{ width: 100 + '%', height: 40 + 'vh' }}></div>
}

export default Index
