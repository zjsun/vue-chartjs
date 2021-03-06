import Vue from 'vue'
import BarChart from 'src/examples/BarExample'

describe('BarChart', () => {
  let el

  beforeEach(() => {
    el = document.createElement('div')
  })

  it('should render a canvas', () => {
    const vm = new Vue({
      template: '<bar-chart></bar-chart>',
      components: { BarChart }
    }).$mount(el)

    expect(vm.$el.querySelector('#bar-chart')).not.to.be.an('undefined')
    expect(vm.$el.querySelector('canvas')).not.to.be.an('undefined')
    expect(vm.$el.querySelector('canvas')).not.to.be.an('null')
    expect(vm.$el.querySelector('canvas')).to.exist
  })

  it('should change id based on prop', () => {
    const vm = new Vue({
      template: '<bar-chart chartId="barchartprop"></bar-chart>',
      components: { BarChart }
    }).$mount(el)

    expect(vm.$el.querySelector('#barchartprop')).not.to.be.an('undefined')
  })
})
