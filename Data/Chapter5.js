const CHAPTER5 = [
  {
    question:
      "R1. What is meant by a control plane that is based on per-router control? In such cases, when we say the network control and data planes are implemented 'monolithically,' what do we mean?",
    answer:
      "1. Per-router control means that a routing algorithm runs in each and every router; both forwarding and routing function are constrained within each router. Each router has a routing component that communicates with the routing components in other routers to compute the values for its forwarding table. In such cases, we say that the network control and data planes are implemented monolithically because each router works as an independent entity that implements its own control and data planes.",
    section: "5.1",
  },
  {
    question:
      "R2. What is meant by a control plane that is based on logically centralized control? In such cases, are the data plane and the control plane implemented within the same device or in separate devices? Explain.",
    answer:
      "2. Logically centralized control means that a logically central routing controller computes and distributes the forwarding tables to be used by each and every router, and each router does not compute its forwarding table, unlike the per-router control. In the case of logically centralized control, the data plane and control plane are implemented in separate devices; the control plane is implemented in a central server or multiple servers, and the data plane is implemented in each router.",
    section: "5.1",
  },
  {
    question:
      "R3. Compare and contrast the properties of a centralized and a distributed routing algorithm. Give an example of a routing protocol that takes a centralized and a decentralized approach.",
    answer:
      "3. A centralized routing algorithm computes the least-cost path between a source and destination by using complete, global knowledge about the network. The algorithm needs to have the complete knowledge of the connectivity between all nodes and all links' costs. The actual calculation can be run at one site or could be replicated in the routing component of each and every router. A distributed routing algorithm calculates the lease-cost path in an iterative, distributed manner by the routers. With a decentralized algorithm, no node has the complete information about the costs of all network links. Each node begins with only the knowledge of the costs of its own directly attached links, and then through an iterative process of calculation and information exchange with its neighboring nodes, a node gradually calculates the least-cost path to a destination or a set of destinations. OSPF protocol is an example of centralized routing algorithm, and BGP is an example of a distributed routing algorithm.",
    section: "5.2",
  },
  {
    question: "R4. Compare and contrast static and dynamic routing algorithms.",
    answer:
      "4. Link state algorithms: Computes the least-cost path between source and destination using complete, global knowledge about the network. Distance-vector routing: The calculation of the least-cost path is carried out in an iterative, distributed manner. A node only knows the neighbor to which it should forward a packet in order to reach given destination along the least-cost path, and the cost of that path from itself to the destination.",
    section: "5.2",
  },
  {
    question:
      "R5. What is the 'count to infinity' problem in distance vector routing?",
    answer:
      "5. The count-to-infinity problem refers to a problem of distance vector routing. The problem means that it takes a long time for a distance vector routing algorithm to converge when there is a link cost increase. For example, consider a network of three nodes x, y, and z. Suppose initially the link costs are c(x,y)=4, c(x,z)=50, and c(y,z)=1. The result of distance-vector routing algorithm says that z's path to x is z-->y--> x and the cost is 5(=4+1). When the cost of link (x,y) increases from 4 to 60, it will take 44 iterations of running the distance-vector routing algorithm for node z to realize that its new least-cost path to x is via its direct link to x, and hence y will also realize its least-cost path to x is via z.",
    section: "5.2",
  },
  {
    question:
      "R6. How is a least cost path calculated in a decentralized routing algorithm?",
    answer:
      "6. No. Each AS has administrative autonomy for routing within an AS.",
    section: "5.2",
  },
  {
    question:
      "R7. Why are different inter-AS and intra-AS protocols used in the Internet?",
    answer:
      "7. Policy: Among ASs, policy issues dominate. It may well be important that traffic originating in a given AS not be able to pass through another specific AS. Similarly, a given AS may want to control what transit traffic it carries between other ASs. Within an AS, everything is nominally under the same administrative control and thus policy issues a much less important role in choosing routes with in AS. Scale: The ability of a routing algorithm and its data structures to scale to handle routing to/among large numbers of networks is a critical issue in inter-AS routing. Within an AS, scalability is less of a concern. For one thing, if a single administrative domain becomes too large, it is always possible to divide it into two ASs and perform inter-AS routing between the two new ASs. Performance: Because inter-AS routing is so policy oriented, the quality (for example, performance) of the routes used is often of secondary concern (that is, a longer or more costly route that satisfies certain policy criteria may well be taken over a route that is shorter but does not meet that criteria). Indeed, we saw that among ASs, there is not even the notion of cost (other than AS hop count) associated with routes. Within a single AS, however, such policy concerns are of less importance, allowing routing to focus more on the level of performance realized on a route.",
    section: "5.3 - 5.4",
  },
  {
    question:
      "R8. True or false: When an OSPF route sends its link state information, it is sent only to those nodes directly attached neighbors. Explain.",
    answer:
      "8. False. With OSPF, a router broadcasts its link-state information to all other routers in the autonomous system to which it belongs, not just to its neighboring routers. This is because with OSPF, each router needs to construct a complete topological map of the entire AS and then locally runs Dijkstra's shortest-path algorithm to determine its least- cost paths to all other nodes in the same AS.",
    section: "5.3 - 5.4",
  },
  {
    question:
      "R9. What is meant by an area in an OSPF autonomous system? Why was the concept of an area introduced?",
    answer:
      "9. An area in an OSPF autonomous system is refers to a set of routers, in which each router broadcasts its link state to all other routers in the same set. An OSPF AS can be configured hierarchically into multiple areas, with each area running its own OSPF link-state routing algorithm. Within each area, one or more area border routers are responsible for routing packets outside the area. The concept of area is introduced for scalability reason, i.e., we would like to build a hierarchical routing for a large scale OSPF AS, and an area is an important building block in hierarchical routing.",
    section: "5.3 - 5.4",
  },
  {
    question:
      "R10. Define and contrast the following terms: subnet, prefix, and BGP route.",
    answer:
      "10. A subnet is a portion of a larger network; a subnet does not contain a router; its boundaries are defined by the router and host interfaces. A prefix is the network portion of a CDIRized address; it is written in the form a.b.c.d/x ; A prefix covers one or more subnets. When a router advertises a prefix across a BGP session, it includes with the prefix a number of BGP attributes. In BGP jargon, a prefix along with its attributes is a BGP route (or simply a route).",
    section: "5.3 - 5.4",
  },
  {
    question:
      "R11. How does BGP use the NEXT-HOP attribute? How does it use the AS-PATH attribute?",
    answer:
      "11. Routers use the AS-PATH attribute to detect and prevent looping advertisements; they also use it in choosing among multiple paths to the same prefix. The NEXT- HOP attribute indicates the IP address of the first router along an advertised path (outside of the AS receiving the advertisement) to a given prefix. When configuring its forwarding table, a router uses the NEXT-HOP attribute.",
    section: "5.3 - 5.4",
  },
  {
    question:
      "R12. Describe how a network administrator of an upper-tier ISP can implement policy when configuring BGP.",
    answer:
      "12. A tier-1 ISP B may not to carry transit traffic between two other tier-1 ISPs, say A and C, with which B has peering agreements. To implement this policy, ISP B would not advertise to A routes that pass through C; and would not advertise to C routes that pass through A.",
    section: "5.3 - 5.4",
  },
  {
    question:
      "R13. True or false: When a BGP router receives an advertised path from its neighbor, it must add its own identity to the received path and then send that new path on to all of its neighbors. Explain.",
    answer:
      "13. False. A BGP router can choose not to add its own identity to the received path and then send that new path on to all of its neighbors, as BGP is a policy-based routing protocol. This can happen in the following scenario. The destination of the received path is some other AS, instead of the BGP router's AS, and the BGP router does not want to work as a transit router.",
    section: "5.3 - 5.4",
  },
  {
    question:
      "R14. Describe the main role of the communication layer, the network-wide state  management layer, and the network-control application layer in an SDN controller.",
    answer:
      "14. The communication layer is responsible for the communication between the SDN controller and those controlled network devices, via a protocol such as OpenFlow. Through this layer, an SDN controller controls the operation of a remote SDN- enabled switch, host, or other devices, and a device communicates locally-observed events (e.g., a message indicating a link failure) to the controller. The network-wide state-management layer provides up-to-date information about state a network's hosts, links, switches, and other SDN-controlled devices. A controller also maintains a copy of the flow tables of the various controlled devices. The network-control application layer represents the brain of SDN control plane. The applications at this layer use the APIs provided by a SDN controller to specify and control the data plane in the network devices. For example, a routing network-control application might determine the end-end paths between sources and destinations. Another network application might perform access control.",
    section: "5.5",
  },
  {
    question:
      "R15. Suppose you wanted to implement a new routing protocol in the SDN control plane. At which layer would you implement that protocol? Explain.",
    answer:
      "15. I would implement a new routing protocol at the SDN's network-control application layer, as this is the layer where a routing protocol determines the end-to-end paths between sources and destinations.",
    section: "5.5",
  },
  {
    question:
      "R16. What types of messages flow across an SDN controller's northbound and southbound APIs? Who is the recipient of these messages sent from the controller across the southbound interface, and who sends messages to the controller across the northbound interface?",
    answer:
      "16. The following is a list of types of messages flow across a SDN controller's southbound from the controller to the controlled devices. The recipient of these messages is a controlled packet switch.  - Configuration. This message allows the controller to query and set a switch's configuration parameters.  - Modify-state. This message is used by a controller to add/delete or modify entries in the switch's flow table, and to set switch port properties. -  - Read-state. This message is used by a controller to collect statistics and counter values from the switch's flow table and ports. Send-packet. This message is used by the controller to send a specific packet out of a specified port at the controlled switch. There are also messages that network-control applications (as senders) send to the controller across the northbound interfaces, for example, messages to read/write network state and flow tables within the state-management layer of the controller.",
    section: "5.5",
  },
  {
    question:
      "R17. Describe the purpose of two types of OpenFlow messages (of your choosing) that are sent from a controlled device to the controller. Describe the purpose of two types of Openflow messages (of your choosing) that are send from the controller to a controlled device.",
    answer:
      "17. Two types of messages from a controlled device to a controller:  - Flow-removed message. Its purpose is to inform the controller that a flow table entry has been removed, for example, by a timeout or as the result of a received modify-state message.  - Port-status message. Its purpose is to inform the controller of a change in port status. Two types of messages from a controller to a controlled device:  - Modify-state. The purpose is to add/delete or modify entries in the switch's flow table, and to set switch port properties.  - Read-state. The purpose is to collect statistics and counter values rom the switch's flow table and ports.",
    section: "5.5",
  },
  {
    question:
      "R18. What is the purpose of the service abstraction layer in the OpenDaylight SDN controller?",
    answer:
      "18. The service abstraction layer allows internal network service applications to communicate with each other. It allows controller components and applications to invoke each other's services and to subscribe to events they generate. This layer also provides a uniform abstract interface to the specific underlying communications protocols in the communication layer, including OpenFlow and SNMP.",
    section: "5.5",
  },
  {
    question: "R19. Names four different types of ICMP messages",
    answer:
      "19. Echo reply (to ping), type 0, code 0 Destination network unreachable, type 3 code 0 Destination host unreachable, type 3, code 1. Source quench (congestion control), type 4 code 0.",
    section: "5.6 - 5.7",
  },
  {
    question:
      "R20. What two types of ICMP messages are received at the sending host executing the Traceroute program?",
    answer:
      "20. ICMP warning message (type 11 code 0) and a destination port unreachable ICMP message (type 3 code 3).",
    section: "5.6 - 5.7",
  },
  {
    question:
      "R21. Define the following terms in the context of SNMP: managing server, managed device, network management agent and MIB.",
    answer:
      "21. A managing server is an application, typically with a human in the loop, running in a centralized network management station in a network operation center. It controls the collection, processing, analysis, and/or display of network management information. Actions are initiated in a managing server to control network behavior and a network administrator uses a managing server to interact with the network's devices. A managed device is a piece of network equipment (including its software) that resides on a managed network. A managed device might be a host, router, switch, middlebox, modem, thermometer, or other network-connected device.A network management agent is a process running in a managed device that communicates with a managing server, taking local actions at the managed device under the command and control of the managing server. Management Information Base (MIB) collects the information associated with those managed objects in a managed network. A MIB object might be a counter, such as the number of IP datagrams discarded at a router due to errors in an IP datagram header, or the number of UDP segments received at a host, or the status information such as whether a particular device is functioning correctly.",
    section: "5.6 - 5.7",
  },
  {
    question:
      "R22. What are the purposes of the SNMP GetRequest and SetRequest messages?",
    answer:
      "22. GetRequest is a message sent from a managing server to an agent to request the value of one or more MIB objects at the agent's managed device. SetRequest is a message used by a managing server to set the value of one or more MIB objects in a managed device.",
    section: "5.6 - 5.7",
  },
  {
    question: "R23. What is the purpose of the SNMP trap message?",
    answer:
      "23. A SNMP trap message is generated as a response to an event happened on a managed device for which the device's managing server requires notification. It is used for notifying a managing server of an exceptional situation (e.g., a link interface going up or down) that has resulted in changes to MIB object values.",
    section: "5.6 - 5.7",
  },
];

export default CHAPTER5;
