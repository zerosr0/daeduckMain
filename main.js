//개발팀별 project 현황
Highcharts.chart('container_team', {
  chart: {
    type: 'column',
  },
  title: {
    text: '개발팀별 project 현황',
    align: 'center'
  },
  xAxis: {
    categories: ['정상', '지연예상', '지연']
  },
  yAxis: {
    min: 0,
    title: {
      enabled: false
    },
    stackLabels: {
      enabled: true
    }
  },
  legend: {
    align: 'left',
    x: 250,
    verticalAlign: 'top',
    y: 15,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true
      }
    }
  },
  series: [{
    name: 'T1',
    data: [3, 5, 2]
  }, {
    name: 'T2',
    data: [12, 8, 8]
  }, {
    name: 'T3',
    data: [2, 2, 5]
  }],
  //워터마크 제거
  credits: {
    enabled: false
  }
});

//APQP 단계별
Highcharts.chart('container_step', {
  chart: {
    type: 'column'
  },
  title: {
    align: 'center',
    text: 'APQP 단계별'
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      enabled: false
    }

  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.0f}건'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}%</b> of total<br/>'
  },

  series: [
    {
      name: 'Browsers',
      colorByPoint: true,
      data: [
        {
          name: '1단계',
          y: 2,
        },
        {
          name: '2단계',
          y: 2,
        },
        {
          name: '3단계',
          y: 10,
        },
        {
          name: '4단계',
          y: 8,
        },
        {
          name: '5단계',
          y: 2,
        },
      ]
    }
  ],
  //워터마크 제거
  credits: {
    enabled: false
  }
});


