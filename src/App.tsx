import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <div className="container">
        <h1>自我介紹</h1>
        <h2>我是資管3C的張祥育</h2>
        <p>可以叫我 Taco!</p>
        <h3>興趣</h3>
        <ul>
          <li>運動</li>
          <li>音樂</li>
          <li>aespa!!!</li>
        </ul>

        <h3>我的小檔案</h3>
        <table>
          <tr>
            <th>姓名</th>
          </tr>
          <tr>
            <td>張祥育</td>
          </tr>
        </table>
      </div>
      <div className="about-aespa">
        <p>Aespa is the best K-pop girls group!</p>
        <img src="aespa-karina-armageddon-4k.jpg" alt="我老婆" />
        <p>這是我老婆</p>
      </div>
      <h3>aespa成員列表</h3>
      <ol>
        <li>Karina</li>
        <li>Giselle</li>
        <li>Winter</li>
        <li>Ningning</li>
      </ol>

      <form action="/submit" method="post">
        <label htmlFor="name">最喜歡:</label>
        <input type="text" id="name" name="name" />
        <input type="submit" value="提交" />
      </form>

      <a href="https://www.youtube.com/watch?v=Ke-qchUc3Xo" target="_blank">來看我老婆</a>
    </>
  )
}

export default App
