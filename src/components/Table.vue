<template>
  <el-table
    :data='tableData'
    style='width: 100%'>
    <el-table-column
      prop='date'
      label='日期'
      width='180'>
    </el-table-column>
    <el-table-column
      prop='name'
      label='姓名'
      width='180'>
    </el-table-column>
    <el-table-column
      prop='address'
      label='地址'>
    </el-table-column>
    <el-table-column label='操作'>
      <template slot-scope='scope'>
        <el-button
          @click.native.prevent='deleteRow(scope.$index, tableData)'
          type='text'
          size='small'>
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  },
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎0',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>
