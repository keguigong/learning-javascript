/**
 * 实现一个同时只执行 2 个请求的函数，按照顺序添加进函数，然后按照顺序输出 2，1，3，4
 */

const request1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 400);
});

const request2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 300);
});

const request3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 500);
});

const request4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 600);
});

function scheduler(max) {
  // Your code here

  count = 0;
  requestList = [];

  scheduler.prototype.addRequest = (request) =>
    new Promise((resolve, reject) => {
      if (count < max) {
        count = count + 1;

        request.then(() => {
          count = count - 1;

          if (requestList.length > 0) {
            let { request: nextRequest, resolve: nextResolve } = requestList[0];
            this.addRequest(nextRequest).then(() => {
              nextResolve();
            });
            requestList.shift();
          }

          resolve();
        });
      } else {
        requestList.push({ request, resolve });
      }
    });
}

let schedule = new scheduler(2);

schedule.addRequest(request1).then(() => {
  console.log("1");
});

schedule.addRequest(request2).then(() => {
  console.log("2");
});

schedule.addRequest(request3).then(() => {
  console.log("3");
});

schedule.addRequest(request4).then(() => {
  console.log("4");
});
