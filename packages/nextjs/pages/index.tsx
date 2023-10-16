import { NextPage } from "next";
import { type } from "os";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

//定义一个新的数据类型来记录后端返回的数据
export type resultByDataset ={
  dataset_id:string,
  results:search_result[]
}
//定义一个数据类型来记录每个搜索结果
export type search_result={
  data:string,
  metadata:{},
}

const ETHSpace: NextPage = () => {
  //在对后端发起请求后，将response的内容保存在results中
  //如果用户选择使用mixed模式，则使用resultByDataset来记录结果
  const [res,setRes]=useState<resultByDataset[]>([]);
  //设置默认是在我们提供的数据集而不是公共数据集中查询
  const [qinPublic, setQinPublic] = useState(false);
  //获取目前提供的数据集选项
  const [options, setOptions] = useState<string[]>([]);
  //获取用户选择的数据集
  const [dataset, setDataset] = useState("mixed");
  //获取用户搜索的prompt
  const [seaPrompt, setSeaPrompt] = useState("");
  //仅在组件挂载时执行一次获取数据集列表
  useEffect(() => {
      fetchOptions();
    // console.log(data);
  });

  //从后端获取数据集列表
  const fetchOptions = async () => {
    const response = await fetch("https://faasbyleeduckgo.gigalixirapp.com/api/v1/run?name=VectorAPI&func_name=get_cluster", {
      method: "POST",
      headers:{
        'Content-Type':'application/json;charset=utf-8',
      },
      body:JSON.stringify({
        "params": ["ai-based-smart-contract-explorer"]
      })
    });
    const data=await response.json();
    setOptions(data.result);
  };
  //获取search prompt与dataset名字后向后端发request
  const handleonClick = async() => {
    //每次查询前要先把res重置为空
    setRes([]);
    //如果用户选择的是mix混合搜索，则需要向所有get-cluster得来的VecDB列表发请求，但我觉得其实这个逻辑在后端做会比较好，尤其如果访问量大的话，3倍请求很容易造成服务器压力过大
    if(dataset=='mixed'){
      options.map(async (option)=>{
        const response = await fetch("https://faasbyleeduckgo.gigalixirapp.com/api/v1/run?name=VectorAPI&func_name=search_data",{
        method:"POST",
        headers:{
          'Content-Type':'application/json; charset=utf-8',
        },
        body:JSON.stringify({
          "params": [option, seaPrompt, 3]
        })
      });
      const data=await response.json();
      // console.log(data);
      //现在把每个接口的数据都保存下来
      const res1:resultByDataset={
        dataset_id:data.result.dataset_id,
        results:data.result.similarities.map((s: { data: any; metadata: any; })=>{
          return {
            data:s.data,
            metadata:s.metadata
          }
        })
      };
      // console.log("this is res1:",res1);
      // console.log("this is res before",res);
      setRes(res=>[res1,...res]);
      // console.log("this is res after",res);
      });
      // console.log(res);
    }else{
      const response = await fetch("https://faasbyleeduckgo.gigalixirapp.com/api/v1/run?name=VectorAPI&func_name=search_data",{
      method:"POST",
      headers:{
        'Content-Type':'application/json; charset=utf-8',
      },
      body:JSON.stringify({
        "params": [dataset, seaPrompt, 5]
      })
    });
    const data=await response.json();
    const res1:resultByDataset={
      dataset_id:data.result.dataset_id,
      results:data.result.similarities.map((s: { data: any; metadata: any; })=>{
        return {
          data:s.data,
          metadata:s.metadata
        }
      })
    };
    // console.log(data.result.similarities);
    setRes(res=>[res1,...res]);
    // console.log(res);
    }
  };
  return (
    <div className="grid lg:grid-cols-2 flex-grow">
      <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold">AI-based Smart Contract Explorer</h1>
            <p className="py-6">-- Smart Contract Search Platform based on AI<br></br>
              -- Let AI fully assist smart contract developers</p>
            <div className="form-control mb-6">
              <label className="label cursor-pointer">
                <span className="label-text text-2xl">Search in the Free Dataset:</span>
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  checked={qinPublic}
                  onChange={() => {
                    setQinPublic(!qinPublic);
                  }}
                />
              </label>
            </div>
            <div className="join mb-6">
              <div>
                <div>
                  <input
                    style={{ width: "300px" }}
                    className="input input-bordered join-item"
                    value={seaPrompt}
                    onChange={(e) => {
                      setSeaPrompt(e.target.value);
                    }}
                    placeholder="Enter your prompt to search" />
                </div>
              </div>
              <div>
                <div>
                  {!qinPublic ? (
                    <select
                      className="select select-bordered join-item"
                      onChange={(e) => {
                        setDataset(e.target.value);
                      }}>
                        <option value="mixed">mixed</option>
                      {
                        options.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))
                      }
                    </select>
                  ) : (
                    <input
                      className="input input-bordered join-item"
                      value={dataset}
                      onChange={(e) => {
                        setDataset(e.target.value);
                      }}
                      placeholder="Pls input the public dataset name" />
                  )}
                </div>
              </div>
              <div className="indicator">
                <button className="btn join-item" onClick={() => {
                  handleonClick();
                }}>Search</button>
              </div>
            </div>
            <div className="hero-content text-left">
              <span className="text-sm">
                <p><b>A search question example: </b></p>
                <p>* Give me some function examples about NFT</p>
                <p>* 0x73c7448760517E3E6e416b2c130E3c6dB2026A1d</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-green-500">
        <div className="mx-auto w-4/5 max-h-[600px] backdrop-blur-lg backdrop-filter p-10 m-10 rounded-lg opacity-80 shadow-md overflow-auto overflow-y-auto">
          <h2 className="text-4xl font-bold mb-1">Search Results</h2>
          <div>
            {
               res.map((r,index)=>(
                <div key={index} className="collapse bg-base-200 m-5 overflow-x-auto">
                  <input type="checkbox" className="peer" /> 
                  <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Results from {r.dataset_id}
                  </div>
                  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    {
                      r.results.map((item,index)=>(
                        <div key={index}>
                          <div className="divider"></div>
                          <span className="text-xl">Data</span>
                          <pre className="text-base mb-3">
                            <p>click to see more.</p>
                            {/* <ReactMarkdown>{item.data}</ReactMarkdown> */}
                           </pre>
                          <span className="text-xl">Metadata</span>
                          <pre className="text-base">{JSON.stringify(item.metadata,null,2)}</pre>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
};

export default ETHSpace;