# 进程和线程的区别？JS单线程的优缺点
都是cpu工作时间片段
进程是指CPU在运行指令及保存和加载上下文所需的时间
线程是进程中的一个更小的单位，它描述的是执行一段指令所需要的时间
JS 是单线程语言，两个线程是互斥的，JS代码会影响UI的渲染


# 什么是执行栈
JS自带的内存空间
执行栈是一个存储函数调用的栈结构

# Event-loop  事件循环
同步代码
异步代码 - 微任务(microtask)     -宏任务(macrotask)

微任务：process.nextTick, promise, MutationObserver

宏任务：script,setTimeout,setInterval, setImmediate, I/O ,UI rendering

# Event-loop 执行顺序
1. 首先执行同步代码，这属于宏任务
2. 当执行完同步代码后，执行栈为空，查询是否有异步代码需要执行
3. 执行微任务 
4. 当执行完所有的微任务后，如果有必要会去渲染页面
5. 然后开始下一轮 Event Loop,执行宏任务中的异步代码，


