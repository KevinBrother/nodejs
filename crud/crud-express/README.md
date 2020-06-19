# express-crud

## 项目初始化

```
npm init -y
```

## 安装必须的依赖

```
 npm install --save express body-parser express-art-template
```

## 路由设计

| 请求方法 | 请求路径          | get 参数 | post 参数                       | 备注             |
| -------- | ----------------- | -------- | ------------------------------- | ---------------- |
| POST     | /students/add     |          | name、age、gender、hobbies      | 添加学生         |
| GET      | /students/list    |          |                                 | 获取学生列表     |
| GET      | /students/delete  | id       |                                 | 删除请求         |
| POST     | /students/edit    |          | id、 name、age、gender、hobbies | 获取某个学生数据 |
| GET      | /students/getById | id       |                                 | 获取某个学生数据 |
