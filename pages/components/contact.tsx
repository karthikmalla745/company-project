import React from 'react'

const Contact = () => {
  return (
    <div>
        <footer className="w-100 mx-auto bg-gray-900 py-20">
            <div className="lg:max-w-7xl px-4 w-full mx-auto">
                <div className="w-100 mx-auto sm:grid sm:grid-cols-4 grid-cols-1 lg:gap-20 md:gap-10 gap-5">
                    <div className="col-span-1">
                        <div className="w-100">
                            <ul className="w-100 flex flex-col gap-8">
                                <li><a aria-current="page" className="text-gray-400 hover:text-white text-base capitalize" href="/">home</a></li>
                                <li><a className="text-gray-400 hover:text-white text-base capitalize" href="/products/loopr-ai-store">products</a></li>
                                <li><a className="text-gray-400 hover:text-white text-base capitalize" href="/industries/aerospace">industries</a></li>
                                <li><a className="text-gray-400 hover:text-white text-base capitalize" href="/about-us">about us</a></li>
                                <li><a href="https://loopraitech.kekahire.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-base capitalize">careers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-2 sm:px-10 px-0 sm:py-0 py-16">
                        <div className="w-100">
                            <h4 className="w-full text-white font-bold">Get started now!</h4>
                            <p className="w-4/6 text-gray-400 font-base py-6">Have a use-case or problem statement? Or just curious? We're just one email away.</p>
                            <input type="text" className="h-8 px-4 w-full"/>
                                <button className="text-sm bg-blue-700 text-white py-3 capitalize text-center px-8 mt-6 font-semibold border-none">send</button>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="w-full flex flex-col gap-8">
                            <div className="text-base text-gray-400 flex flex-row w-full gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.122" height="10" viewBox="0 0 16.122 10"><g id="Group_67" data-name="Group 67" transform="translate(-223.878 -5022.332)"><g id="Rectangle_11" data-name="Rectangle 11" transform="translate(224 5022.332)" fill="none" stroke="#9ca3af" stroke-width="1"><rect width="16" height="10" stroke="none"></rect><rect x="0.5" y="0.5" width="15" height="9" fill="none"></rect></g><path id="Path_10" data-name="Path 10" d="M365.355,5431.867l7.942,4.66,7.624-5.189" transform="translate(-141.224 -408.465)" fill="none" stroke="#fff" stroke-width="1"></path></g>
                                </svg>contact@loopr.ai
                            </div>
                            <div className="text-base text-gray-400 flex flex-row w-full gap-3 items-center">
                                <svg width="20" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke="#9ca3af" clip-rule="evenodd">
                                    <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"></path>
                                </svg>(206) 774-0808
                            </div>
                        </div>
                        <div className="w-full flex flex-row gap-5 mt-16">
                            <a href="https://www.linkedin.com/company/loopr-ai/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.569" height="17.504" viewBox="0 0 17.569 17.504"><g id="Group_114" data-name="Group 114" transform="translate(0.238)">
                                    <path id="Path_51" data-name="Path 51" d="M92.115,546.993c.133-.124.23-.224.336-.314a3.976,3.976,0,0,1,2.619-.954,5.247,5.247,0,0,1,1.86.214,3.919,3.919,0,0,1,2.639,2.959,4.418,4.418,0,0,1,.106.991c.009,2.443,0,4.887,0,7.33a.624.624,0,0,1-.677.674q-1.332,0-2.664,0a.63.63,0,0,1-.713-.707q0-2.969,0-5.939a4.4,4.4,0,0,0-.055-.674,1.308,1.308,0,0,0-.951-1.051,1.6,1.6,0,0,0-2.2,1.487c-.008.13-.006.26-.006.39v5.82a.59.59,0,0,1-.677.673q-1.5,0-3,0a.581.581,0,0,1-.664-.664V546.71c0-.472.219-.69.695-.691h2.664a.618.618,0,0,1,.691.688C92.115,546.79,92.115,546.872,92.115,546.993Zm4.343,10.323,2.4.006a.233.233,0,0,0,.233-.232c0-1.016.013-5.1.011-7.2a3.651,3.651,0,0,0-.043-.572,3.4,3.4,0,0,0-2.219-2.8,4.394,4.394,0,0,0-1.738-.213,3.852,3.852,0,0,0-2.754,1.284c-.191.232-.407.476-.61.721a.1.1,0,0,1-.176-.064c0-.482,0-1.135.005-1.452a.187.187,0,0,0-.187-.188h-2.5a.187.187,0,0,0-.187.187V557.12a.182.182,0,0,0,.182.182h2.81a.182.182,0,0,0,.181-.182c0-.723,0-3.419,0-4.783,0-.469-.007-.939.011-1.408a2.206,2.206,0,0,1,2.135-2.1,2.079,2.079,0,0,1,2.04,1.315A3.54,3.54,0,0,1,96.2,551.2c.018,1.68.026,4.987.029,5.888A.232.232,0,0,0,96.458,557.316Z" transform="translate(-82.584 -540.634)" fill="#3c4fe0" stroke="#3c4fe0" stroke-miterlimit="10" stroke-width="0.477"></path>
                                    <path id="Path_52" data-name="Path 52" d="M76.017,552.283q0-2.451,0-4.9a1.349,1.349,0,0,1,.062-.466.772.772,0,0,1,.749-.539q1.2-.014,2.392,0a.876.876,0,0,1,.845.817c0,.062,0,.124,0,.186v9.872a.9.9,0,0,1-1,1c-.684,0-1.369-.013-2.053,0a.946.946,0,0,1-1.009-1.014C76.028,555.585,76.017,553.934,76.017,552.283Zm3.476.034v-4.952c0-.313-.1-.415-.418-.415H77.006c-.328,0-.408.079-.408.411q0,4.944,0,9.888c0,.316.1.418.415.418h2.069c.321,0,.411-.093.411-.415Z" transform="translate(-76.012 -540.985)" fill="#3c4fe0" stroke="#3c4fe0" stroke-miterlimit="10" stroke-width="0.477"></path><path id="Path_54" data-name="Path 54" d="M80.732,538.249a2.032,2.032,0,1,1-4.063-.059,2.032,2.032,0,0,1,4.063.059Z" transform="translate(-76.669 -536.19)" fill="#3c4fe0"></path></g>
                                </svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 -2 27 40">
                                    <path d="M3.142 14.528h-.4c-.986 0-1.971.004-2.958-.003-.598-.004-.773-.167-.777-.755a315.005 315.005 0 0 1 0-4.1c.005-.59.185-.756.774-.758.986-.004 1.972 0 2.958 0h.403c0-.162-.002-.293 0-.424.023-1.276-.023-2.558.086-3.827C3.5 1.463 5.95-.847 9.16-.97c1.342-.052 2.688-.021 4.032-.018.45 0 .641.19.644.635.007 1.333.007 2.667 0 4-.003.456-.187.638-.67.65-.907.022-1.815.022-2.722.036-1.056.015-1.472.412-1.491 1.463-.019.996-.004 1.992-.004 3.026.137.007.255.017.372.017 1.165.002 2.33 0 3.495.002.72.002.887.172.887.897.002 1.321.003 2.643 0 3.966-.001.622-.152.78-.77.781-1.189.005-2.376.002-3.564.003h-.42v.444c0 3.518.002 7.036 0 10.554 0 .901-.121 1.022-1.028 1.022H4.156c-.897 0-1.014-.115-1.014-.996V14.528Z" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#3c4fe0" fill="transparent" data-name="Path 55"></path>
                                </svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 24 25" fill="#3c4fe0">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Contact
