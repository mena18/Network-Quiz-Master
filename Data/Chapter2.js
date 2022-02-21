const CHAPTER2 = [
  {
    question:
      "R1. List five nonproprietary Internet applications and the application-layer protocols that they use.",
    answer:
      "1. The Web: HTTP; file transfer: FTP; remote login: Telnet; e-mail: SMTP; BitTorrent file sharing: BitTorrent protocol",
    section: "2.1",
  },
  {
    question:
      "R2. What is the difference between network architecture and application architecture?",
    answer:
      "2. Network architecture refers to the organization of the communication process into layers (e.g., the five-layer Internet architecture). Application architecture, on the other hand, is designed by an application developer and dictates the broad structure of the application (e.g., client-server or P2P).",
    section: "2.1",
  },
  {
    question:
      "R3. For a communication session between a pair of processes, which process is the client and which is the server?",
    answer:
      "3. The process which initiates the communication is the client; the process that waits to be contacted is the server.",
    section: "2.1",
  },
  {
    question:
      "R4. Why are the terms client and server still used in peer-to-peer applications?",
    answer:
      "4. No. In a P2P file-sharing application, the peer that is receiving a file is typically the client and the peer that is sending the file is typically the server.",
    section: "2.1",
  },
  {
    question:
      "R5. What information is used by a process running on one host to identify a process running on another host?",
    answer:
      "5. The IP address of the destination host and the port number of the socket in the destination process.",
    section: "2.1",
  },
  {
    question:
      "R6. What is the role of HTTP in a network application? What other components are needed to complete a Web application?",
    answer:
      "6. You would use UDP. With UDP, the transaction can be completed in one roundtrip time (RTT) - the client sends the transaction request into a UDP socket, and the server sends the reply back to the client's UDP socket. With TCP, a minimum of two RTTs are needed - one to set-up the TCP connection, and another for the client to send the request, and for the server to send back the reply.",
    section: "2.1",
  },
  {
    question:
      "R7. Referring to Figure 2.4, we see that none of the applications listed in Figure 2.4 requires both no data loss and timing. Can you conceive of an application that requires no data loss and that is also highly time-sensitive?",
    answer:
      "7. One such example is remote word processing, for example, with Google docs. However, because Google docs runs over the Internet (using TCP), timing guarantees are not provided.",
    section: "2.1",
  },
  {
    question:
      "R8. List the four broad classes of services that a transport protocol can provide. For each of the service classes, indicate if either UDP or TCP (or both) provides such a service.",
    answer:
      "8. a) Reliable data transfer TCP provides a reliable byte-stream between client and server but UDP does not. b) A guarantee that a certain value for throughput will be maintained Neither c) A guarantee that data will be delivered within a specified amount of time Neither d) Confidentiality (via encryption) Neither",
    section: "2.1",
  },
  {
    question:
      "R9. Recall that TCP can be enhanced with SSL to provide process-to-process security services, including encryption. Does SSL operate at the transport layer or the application layer? If the application developer wants TCP to be enhanced with SSL, what does the developer have to do?",
    answer:
      "9. SSL operates at the application layer. The SSL socket takes unencrypted data from the application layer, encrypts it and then passes it to the TCP socket. If the application developer wants TCP to be enhanced with SSL, she has to include the SSL code in the application.",
    section: "2.1",
  },
  {
    question: "R10. What is meant by a handshaking protocol?",
    answer:
      "10. A protocol uses handshaking if the two communicating entities first exchange control packets before sending data to each other. SMTP uses handshaking at the application layer whereas HTTP does not.",
    section: "2.2-2.5",
  },
  {
    question:
      "R11. What does a stateless protocol mean? Is IMAP stateless? What about SMTP?",
    answer:
      "11. The applications associated with those protocols require that all application data be received in the correct order and without gaps. TCP provides this service whereas UDP does not.",
    section: "2.2-2.5",
  },
  {
    question:
      "R12. How can websites keep track of users? Do they always need to use cookies?",
    answer:
      "12. When the user first visits the site, the server creates a unique identification number, creates an entry in its back-end database, and returns this identification number as a cookie number. This cookie number is stored on the user\u2019s host and is managed by the browser. During each subsequent visit (and purchase), the browser sends the cookie number back to the site. Thus the site knows when this user (more precisely, this browser) is visiting the site.",
    section: "2.2-2.5",
  },
  {
    question:
      "R13. Describe how Web caching can reduce the delay in receiving a requested object. Will Web caching reduce the delay for all objects requested by a user or for only some of the objects? Why?",
    answer:
      "13. Web caching can bring the desired content \u201ccloser\u201d to the user, possibly to the same LAN to which the user\u2019s host is connected. Web caching can reduce the delay for all objects, even objects that are not cached, since caching reduces the traffic on links.",
    section: "2.2-2.5",
  },
  {
    question:
      "R15. Are there any constraints on the format of the HTTP body? What about the email message body sent with SMTP? How can arbitrary data be transmitted over SMTP?",
    answer:
      "15. A list of several popular messaging apps: WhatsApp, Facebook Messenger, WeChat, and Snapchat. These apps use the different protocols than SMS.",
    section: "2.2-2.5",
  },
  {
    question:
      "R16. Suppose Alice, with a Web-based e-mail account (such as Hotmail or Gmail), sends a message to Bob, who accesses his mail from his mail server using POP3. Discuss how the message gets from Alice\u2019s host to Bob\u2019s host. Be sure to list the series of application-layer protocols that are used to move the message between the two hosts.",
    answer:
      "16. The message is first sent from Alice\u2019s host to her mail server over HTTP. Alice\u2019s mail server then sends the message to Bob\u2019s mail server over SMTP. Bob then transfers the message from his mail server to his host over POP3.",
    section: "2.2-2.5",
  },
  {
    question:
      "R18. Assume you have multiple devices, and you connect to your email provider using POP3. You retrieve messages with the \u201cdownload and keep\u201d strategy from multiple devices. Can your email client tell if you have already read the message in this scenario?",
    answer:
      "18. With download and delete, after a user retrieves its messages from a POP server, the messages are deleted. This poses a problem for the nomadic user, who may want to access the messages from many different machines (office PC, home PC, etc.). In the download and keep configuration, messages are not deleted after the user retrieves the messages. This can also be inconvenient, as each time the user retrieves the stored messages from a new machine, all of non-deleted messages will be transferred to the new machine (including very old messages).",
    section: "2.2-2.5",
  },
  {
    question:
      "R19. Why are MX records needed? Would it not be enough to use a CNAME record? (Assume the email client looks up email addresses through a Type A query and that the target host only runs an email server.)",
    answer:
      "19. Yes an organization\u2019s mail server and Web server can have the same alias for a host name. The MX record is used to map the mail server\u2019s host name to its IP address.",
    section: "2.2-2.5",
  },
  {
    question:
      "R20. What is the difference between recursive and iterative DNS queries?",
    answer:
      "20. You should be able to see the sender's IP address for a user with an .edu email address. But you will not be able to see the sender's IP address if the user uses a gmail account.",
    section: "2.2-2.5",
  },
  {
    question:
      "R21. Under what circumstances is file downloading through P2P much faster than through a centralized client-server approach? Justify your answer using Equation 2.2.",
    answer:
      "21. It is not necessary that Bob will also provide chunks to Alice. Alice has to be in the top 4 neighbors of Bob for Bob to send out chunks to her; this might not occur even if Alice provides chunks to Bob throughout a 30-second interval.",
    section: "2.5",
  },
  {
    question:
      "R22. Consider a new peer Alice that joins BitTorrent without possessing any chunks. Without any chunks, she cannot become a top-four uploader for any of the other peers, since she has nothing to upload. How then will Alice get her first chunk?",
    answer:
      "22. Recall that in BitTorrent, a peer picks a random peer and optimistically unchokes the peer for a short period of time. Therefore, Alice will eventually be optimistically unchoked by one of her neighbors, during which time she will receive chunks from that neighbor.",
    section: "2.5",
  },
  {
    question:
      "R23. Assume a BitTorrent tracker suddenly becomes unavailable. What are its consequences? Can files still be downloaded?",
    answer:
      "23. The overlay network in a P2P file sharing system consists of the nodes participating in the file sharing system and the logical links between the nodes. There is a logical link (an \u201cedge\u201d in graph theory terms) from node A to node B if there is a semipermanent TCP connection between A and B. An overlay network does not include routers.",
    section: "2.5",
  },
  {
    question:
      "R24. CDNs typically adopt one of two different server placement philosophies. Name and briefly describe them.",
    answer:
      "24. One server placement philosophy is called Enter Deep, which enter deep into the access networks of Internet Service Providers, by deploying server clusters in access ISPs all over the world. The goal is to reduce delays and increase throughput between end users and the CDN servers. Another philosophy is Bring Home, which bring the ISPs home by building large CDN server clusters at a smaller number of sites and typically placing these server clusters in IXPs (Internet Exchange Points). This Bring Home design typically results in lower maintenance and management cost, compared with the enter-deep design philosophy.",
    section: "2.6",
  },
  {
    question:
      "R25. Besides network-related considerations such as delay, loss, and bandwidth performance, there are other important factors that go into designing a CDN server selection strategy. What are they?",
    answer:
      '25. Other than network-related factors, there are some important factors to consider, such as load-balancing (clients should not be directed to overload clusters), diurnal effects, variations across DNS servers within a network, limited availability of rarely accessed video, and the need to alleviate hot-spots that may arise due to popular video content. Reference paper: Torres, Ruben, et al. "Dissecting video server selection strategies in the YouTube CDN." The 31st IEEE International Conference on. Distributed Computing Systems (ICDCS), 2011. Another factor to consider is ISP delivery cost \u2013 the clusters may be chosen so that specific ISPs are used to carry CDN-to-client traffic, taking into account the different cost structures in the contractual relationships between ISPs and cluster operators.',
    section: "2.6",
  },
  {
    question:
      "R26. In Section 2.7, the UDP server described needed only one socket, whereas the TCP server needed two sockets. Why? If the TCP server were to support n simultaneous connections, each from a different client host, how many sockets would the TCP server need?",
    answer:
      "26. With the UDP server, there is no welcoming socket, and all data from different clients enters the server through this one socket. With the TCP server, there is a welcoming socket, and each time a client initiates a connection to the server, a new socket is created. Thus, to support n simultaneous connections, the server would need n+1 sockets.",
    section: "2.7",
  },
  {
    question:
      "R27. For the client-server application over TCP described in Section 2.7, why must the server program be executed before the client program? For the client-server application over UDP, why may the client program be executed before the server program?",
    answer:
      "27. For the TCP application, as soon as the client is executed, it attempts to initiate a TCP connection with the server. If the TCP server is not running, then the client will fail to make a connection. For the UDP application, the client does not initiate connections (or attempt to communicate with the UDP server) immediately upon execution",
    section: "2.7",
  },
];
export default CHAPTER2;
