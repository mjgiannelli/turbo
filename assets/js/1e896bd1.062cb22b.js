(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{74:function(t,e,l){"use strict";l.r(e),l.d(e,"frontMatter",(function(){return a})),l.d(e,"metadata",(function(){return o})),l.d(e,"toc",(function(){return b})),l.d(e,"default",(function(){return n}));var c=l(3),s=l(7),r=(l(0),l(88)),a={title:"Contract API",slug:"/contract-api"},o={unversionedId:"contract-api",id:"contract-api",isDocsHomePage:!1,title:"Contract API",description:"Augur Turbo - Contract API",source:"@site/docs/contract-api.md",slug:"/contract-api",permalink:"/contract-api",editUrl:"https://github.com/AugurProject/turbo/edit/dev/augur.sh/docs/contract-api.md",version:"current",sidebar:"docs",previous:{title:"Hardhat Tasks",permalink:"/tasks"}},b=[{value:"Actors",id:"actors",children:[]},{value:"Index",id:"index",children:[]}],d={toc:b};function n(t){var e=t.components,l=Object(s.a)(t,["components"]);return Object(r.b)("wrapper",Object(c.a)({},d,l,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"augur-turbo---contract-api"},"Augur Turbo - Contract API"),Object(r.b)("p",null,"Augur Turbo has a relatively simple contract design, consisting of three major components."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Market Factories"),Object(r.b)("li",{parentName:"ul"},"AMM Factories"),Object(r.b)("li",{parentName:"ul"},"FeePot")),Object(r.b)("p",null,"In the current system there is very little trust of any of these contracts."),Object(r.b)("p",null,"A market factory is a contract interface that Chainlink nodes can use to put market data on chain and update it upon resolution. For each of these markets, a user will interact with an AMMFactory to create an AMM associated with that market. In the current implementation this AMM is a simple Balancer v1 pool."),Object(r.b)("p",null,"The FeePot is a contract which will be used in the future to handle REPv2 staking for claiming a portion of fees generated by trading in the system."),Object(r.b)("h2",{id:"actors"},"Actors"),Object(r.b)("p",null,"There are four main Actors in the system."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Liquidity Providers (LPs)"),Object(r.b)("li",{parentName:"ol"},"Traders"),Object(r.b)("li",{parentName:"ol"},"Chainlink Nodes"),Object(r.b)("li",{parentName:"ol"},"UIs / Data Clients")),Object(r.b)("p",null,"Each API is associated with one or more of these actors."),Object(r.b)("h2",{id:"index"},"Index"),Object(r.b)("table",{border:"2",cellspacing:"0",cellpadding:"6",rules:"groups",frame:"hsides"},Object(r.b)("colgroup",null,Object(r.b)("col",{class:"org-left"}),Object(r.b)("col",{class:"org-left"}),Object(r.b)("col",{class:"org-left"}),Object(r.b)("col",{class:"org-left"}),Object(r.b)("col",{class:"org-left"}),Object(r.b)("col",{class:"org-left"})),Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",{scope:"col",class:"org-left"},"Actor"),Object(r.b)("th",{scope:"col",class:"org-left"},"Action"),Object(r.b)("th",{scope:"col",class:"org-left"},"Contract"),Object(r.b)("th",{scope:"col",class:"org-left"},"Method"),Object(r.b)("th",{scope:"col",class:"org-left"},"Approvals"),Object(r.b)("th",{scope:"col",class:"org-left"},"Notes"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"LP"),Object(r.b)("td",{class:"org-left"},"add initial liquidity"),Object(r.b)("td",{class:"org-left"},"AMMFactory"),Object(r.b)("td",{class:"org-left"},"createPool"),Object(r.b)("td",{class:"org-left"},"collateral"),Object(r.b)("td",{class:"org-left"},"\xa0")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"LP"),Object(r.b)("td",{class:"org-left"},"add subsequent liquidity"),Object(r.b)("td",{class:"org-left"},"AMMFactory"),Object(r.b)("td",{class:"org-left"},"addLiquidity"),Object(r.b)("td",{class:"org-left"},"collateral"),Object(r.b)("td",{class:"org-left"},"\xa0")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"LP"),Object(r.b)("td",{class:"org-left"},"remove liquidity"),Object(r.b)("td",{class:"org-left"},"AMMFactory"),Object(r.b)("td",{class:"org-left"},"removeLiquidity"),Object(r.b)("td",{class:"org-left"},"lp token"),Object(r.b)("td",{class:"org-left"},"each market has its own lp token")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"LP, trader"),Object(r.b)("td",{class:"org-left"},"trade winning shares for collateral"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"claimWinnings, claimManyWinnings"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"\xa0")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"trader"),Object(r.b)("td",{class:"org-left"},"trade collateral for shares"),Object(r.b)("td",{class:"org-left"},"AMMFactory"),Object(r.b)("td",{class:"org-left"},"buy"),Object(r.b)("td",{class:"org-left"},"collateral"),Object(r.b)("td",{class:"org-left"},"\xa0")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"trader"),Object(r.b)("td",{class:"org-left"},"trade shares for collateral"),Object(r.b)("td",{class:"org-left"},"AMMFactory"),Object(r.b)("td",{class:"org-left"},"sellForCollateral"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"share tokens trust AMMFactory so no approval needed")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"link node"),Object(r.b)("td",{class:"org-left"},"create market"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"createMarket"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"link node only. use encodeCreation to build the argument. creates 3 markets off of the event")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"link node"),Object(r.b)("td",{class:"org-left"},"resolve market"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"trustedResolveMarkets"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"link node only. use encodeResolutin to build the argument. resolves all 3 markets for the event")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"link node"),Object(r.b)("td",{class:"org-left"},"claim settlement fees"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"claimSettlementFees"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"link node only")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"UI"),Object(r.b)("td",{class:"org-left"},"get share prices"),Object(r.b)("td",{class:"org-left"},"AMMFactory"),Object(r.b)("td",{class:"org-left"},"tokenRatios"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"one of each share equals one collateral, adjusted by shareFactor")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"UI"),Object(r.b)("td",{class:"org-left"},"get pool liquidity"),Object(r.b)("td",{class:"org-left"},"AMMFactory"),Object(r.b)("td",{class:"org-left"},"getPoolBalances and getPoolWeights"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"one of each share equals one collateral, adjusted by shareFactor")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"UI"),Object(r.b)("td",{class:"org-left"},"get trading fee"),Object(r.b)("td",{class:"org-left"},"AMMFactory"),Object(r.b)("td",{class:"org-left"},"getSwapFee"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"\xa0")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"UI"),Object(r.b)("td",{class:"org-left"},"get someone's token balance"),Object(r.b)("td",{class:"org-left"},"AMMFactory"),Object(r.b)("td",{class:"org-left"},"getPoolTokenBalance"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"works well with multicall")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"UI"),Object(r.b)("td",{class:"org-left"},"get pool associated with market"),Object(r.b)("td",{class:"org-left"},"AMMFactory"),Object(r.b)("td",{class:"org-left"},"getPool"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"\xa0")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"UI"),Object(r.b)("td",{class:"org-left"},"get basic market info"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"getMarket"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"\xa0")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"UI"),Object(r.b)("td",{class:"org-left"},"get market info for SportsLink"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"getMarketDetails"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"\xa0")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"UI"),Object(r.b)("td",{class:"org-left"},"get quantity of markets"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"marketCount"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"market ids increment from 1 so this implies the list of all markets")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"AMMFactory"),Object(r.b)("td",{class:"org-left"},"turn collateral into n of each share"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"mintShares"),Object(r.b)("td",{class:"org-left"},"collateral"),Object(r.b)("td",{class:"org-left"},"AMMFactory uses this for more liquidity-efficient buys")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"AMMFactory"),Object(r.b)("td",{class:"org-left"},"turn n of each share into collateral"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"burnShares"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"AMMFactory uses this for more liquidity-efficient sells")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"link node"),Object(r.b)("td",{class:"org-left"},"check if market is resolved"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"isMarketResolved"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"\xa0")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"link node"),Object(r.b)("td",{class:"org-left"},"list all unresolved markets"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"listUnresolvedMarkets"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"unusable on-chain due to O(n) gas cost")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"nobody"),Object(r.b)("td",{class:"org-left"},"get conversion rate from shares to collateral"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"calcCost"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"does the shareFactor adjustment for shares and collateral. dies if there's a remainder")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"nobody"),Object(r.b)("td",{class:"org-left"},"get conversion rate from collateral to shares"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"calcShares"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"reverse of calcCost")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"link node"),Object(r.b)("td",{class:"org-left"},"get markets associated with event"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"getEventMarkets"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"list of 3 market IDS. zero means the market wasn't created")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"link node"),Object(r.b)("td",{class:"org-left"},"check if event was already registered"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"isEventRegistered"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"return true only if all markets were created - often the first (head2head) is created alone")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"link node"),Object(r.b)("td",{class:"org-left"},"pack market creation args into a bytes32"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"encodeCreation"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"use with createMarket")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"nobody"),Object(r.b)("td",{class:"org-left"},"unpack market creation args from bytes32"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"decodeCreation"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"used internally")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"link node"),Object(r.b)("td",{class:"org-left"},"pack market resolution args into a bytes32"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"encodeResolution"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"use with trustedResolveMarkets")),Object(r.b)("tr",null,Object(r.b)("td",{class:"org-left"},"nobody"),Object(r.b)("td",{class:"org-left"},"unpack market resolution args from a bytes32"),Object(r.b)("td",{class:"org-left"},"SportsLinkMarketFactory"),Object(r.b)("td",{class:"org-left"},"decodeResolution"),Object(r.b)("td",{class:"org-left"},"\xa0"),Object(r.b)("td",{class:"org-left"},"used internally")))))}n.isMDXComponent=!0}}]);