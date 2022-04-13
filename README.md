# **react-test-learn-and-pratice**

## 项目说明：

React测试学习和实践。

使用parcel+typescript搭建开发环境，

测试部分使用ts-jest以及@testing-library



## 如何使用：

```
# git clone 拉取代码


# 安装依赖
yarn

# 启动测试
yarn test

# 启动覆盖率测试
yarn testc

# 启动前端服务
yarn dev

# 创建一个组件（放置在src/components文件夹下）
yarn mkc

# 创建一个页面 (放置在src/pages文件夹下)
yar mkc
```



## 测试流程

### 1.明确需要测试的内容

优先级较高：项目的utils(工具函数)/公共组件/通用hooks

​	使用场景比较广泛，所以需要经过测试。

​	测试utils可以使用jest进行测试

​	测试通用组件可以使用 react-test-renderer 进行快照的生成和对比，进行测试

​	测试hooks可以使用 @testing-library/react-hooks 进行测试

优先级次之：helpers/业务组件 

​	这一类的使用场景比较局限，可能若干组件有引用到，需求可能存在变化

### 2.根据业务类型规划测试用例：

```
假设有一个Button组件，根据不同的props渲染不一样的外观。
那么测试流程可能是:
    1.不给定props，测试默认的展示视图是否和预期一致
    2.给定相应props,测试展示视图的props是否和预期一致
    3.给出不符规定的props,测试展示视图是否有异常
```



### 3.项目结构划分

```
__tests__/    # 这一层文件夹下面放置测试文件
	components # 测试公共组件
		Button # 测试Button组件
			__snapshots__/  # 快照文件
				snap.test.tsx.snap
	helpers # 测试helpers
	hooks/ # 测试通用Hooks
		useBool # 测试useBool这个hook
			hook.test.ts # 测试文件
	utils # 测试工具函数
		
```



### 4.测试代码书写

