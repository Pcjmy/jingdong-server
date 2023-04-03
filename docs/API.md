# API 设计

## 注册

### url

`/api/user/register`

### method

`post`

### request body

```js
{
  username: 'hello',
  password: '123456'
}
```

### response body

```js
{
  errno: 0,
  message: 'errno !==0时的错误信息'
}
```

## 登录

### url

`/api/user/login`

### method

`post`

### request body

```js
{
  username: 'hello',
  password: '123456'
}
```

### response body

```js
{
  errno: 0,
  message: 'errno !==0时的错误信息'
}
```
