const CHAPTER3 = [
  {
    question:
      "R1. Suppose the network layer provides the following service. The network layer in the source host accepts a segment of maximum size 1,200 bytes and a destination host address from the transport layer. The network layer then guarantees to deliver the segment to the transport layer at the destination host. Suppose many network application processes can be running at the destination host. a. Design the simplest possible transport-layer protocol that will get application data to the desired process at the destination host. Assume the operating system in the destination host has assigned a 4-byte port number to each running application process. b. Modify this protocol so that it provides a \u201creturn address\u201d to the destination process. c. In your protocols, does the transport layer \u201chave to do anything\u201d in the core of the computer network?HOMEWORK PROBLEMS AND QUESTIONS",
    answer:
      "1. a) Call this protocol Simple Transport Protocol (STP). At the sender side, STP accepts from the sending process a chunk of data not exceeding 1196 bytes, a destination host address, and a destination port number. STP adds a four-byte header to each chunk and puts the port number of the destination process in this header. STP then gives the destination host address and the resulting segment to the network layer. The network layer delivers the segment to STP at the destination host. STP then examines the port number in the segment, extracts the data from the segment, and passes the data to the process identified by the port number. b) The segment now has two header fields: a source port field and destination port field. At the sender side, STP accepts a chunk of data not exceeding 1192 bytes, a destination host address, a source port number, and a destination port number. STP creates a segment which contains the application data, source port number, and destination port number. It then gives the segment and the destination host address to the network layer. After receiving the segment, STP at the receiving host gives the application process the application data and the source port number. c) No, the transport layer does not have to do anything in the core; the transport layer \u201clives\u201d in the end systems.",
    section: "3.1-3.3",
  },
  {
    question:
      "R2. Consider a planet where everyone belongs to a family of six, every family lives in its own house, each house has a unique address, and each person in a given house has a unique name. Suppose this planet has a mail service that delivers letters from source house to destination house. The mail service requires that (1) the letter be in an envelope, and that (2) the address of the destination house (and nothing more) be clearly written on the envelope. Suppose each family has a delegate family member who collects and distributes letters for the other family members. The letters do not necessarily provide any indication of the recipients of the letters. a. Using the solution to Problem R1 above as inspiration, describe a protocol that the delegates can use to deliver letters from a sending family member to a receiving family member. b. In your protocol, does the mail service ever have to open the envelope and examine the letter in order to provide its service?",
    answer:
      "2. a. For sending a letter, the family member is required to give the delegate the letter itself, the address of the destination house, and the name of the recipient. The delegate clearly writes the recipient\u2019s name on the top of the letter. The delegate then puts the letter in an envelope and writes the address of the destination house on the envelope. The delegate then gives the letter to the planet\u2019s mail service. At the receiving side, the delegate receives the letter from the mail service, takes the letter out of the envelope, and takes note of the recipient name written at the top of the letter. The delegate then gives the letter to the family member with this name.<br> b. No, the mail service does not have to open the envelope; it only examines the address on the envelope.",
    section: "3.1-3.3",
  },
  {
    question:
      "R3. How is a UDP socket fully identified? What about a TCP socket? What is the difference between the full identification of both sockets?",
    answer: "3. Source port number y and destination port number x.",
    section: "3.1-3.3",
  },
  {
    question:
      "R4. Describe why an application developer might choose to run an application over UDP rather than TCP.",
    answer:
      "4. An application developer may not want its application to use TCP\u2019s congestion control, which can throttle the application\u2019s sending rate at times of congestion. Often, designers of IP telephony and IP videoconference applications choose to run their applications over UDP because they want to avoid TCP\u2019s congestion control. Also, some applications do not need the reliable data transfer provided by TCP.",
    section: "3.1-3.3",
  },
  {
    question:
      "R5. Why is it that voice and video traffic is often sent over TCP rather than UDP in today\u2019s Internet? (Hint: The answer we are looking for has nothing to do with TCP\u2019s congestion-control mechanism.)",
    answer:
      "5. Since most firewalls are configured to block UDP traffic, using TCP for video and voice traffic lets the traffic though the firewalls.",
    section: "3.1-3.3",
  },
  {
    question:
      "R6. Is it possible for an application to enjoy reliable data transfer even when the application runs over UDP? If so, how?",
    answer:
      "6. Yes. The application developer can put reliable data transfer into the application layer protocol. This would require a significant amount of work and debugging, however.",
    section: "3.1-3.3",
  },
  {
    question:
      "R7. Suppose a process in Host C has a UDP socket with port number 6789. Suppose both Host A and Host B each send a UDP segment to Host C with destination port number 6789. Will both of these segments be directed to the same socket at Host C? If so, how will the process at Host C know that these two segments originated from two different hosts?",
    answer:
      "7. Yes, both segments will be directed to the same socket. For each received segment, at the socket interface, the operating system will provide the process with the IP addresses to determine the origins of the individual segments.",
    section: "3.1-3.3",
  },
  {
    question:
      "R8. Suppose that a Web server runs in Host C on port 80. Suppose this Web server uses persistent connections, and is currently receiving requests from two different Hosts, A and B. Are all of the requests being sent through the same socket at Host C? If they are being passed through different sockets, do both of the sockets have port 80? Discuss and explain.",
    answer:
      "8. For each persistent connection, the Web server creates a separate \u201cconnection socket\u201d. Each connection socket is identified with a four-tuple: (source IP address, source port number, destination IP address, destination port number). When host C receives and IP datagram, it examines these four fields in the datagram/segment to determine to which socket it should pass the payload of the TCP segment. Thus, the requests from A and B pass through different sockets. The identifier for both of these sockets has 80 for the destination port; however, the identifiers for these sockets have different values for source IP addresses. Unlike UDP, when the transport layer passes a TCP segment\u2019s payload to the application process, it does not specify the source IP address, as this is implicitly specified by the socket identifier.",
    section: "3.1-3.3",
  },
  {
    question:
      "R9. In our rdt protocols, why did we need to introduce sequence numbers?",
    answer:
      "9. Sequence numbers are required for a receiver to find out whether an arriving packet contains new data or is a retransmission.",
    section: "3.4",
  },
  {
    question: "R10. In our rdt protocols, why did we need to introduce timers?",
    answer:
      "10. To handle losses in the channel. If the ACK for a transmitted packet is not received within the duration of the timer for the packet, the packet (or its ACK or NACK) is assumed to have been lost. Hence, the packet is retransmitted.",
    section: "3.4",
  },
  {
    question:
      "R11. Suppose that the roundtrip delay between sender and receiver is constant and known to the sender. Would a timer still be necessary in protocol rdt 3.0, assuming that packets can be lost? Explain.",
    answer:
      "11. A timer would still be necessary in the protocol rdt 3.0. If the round trip time is known then the only advantage will be that, the sender knows for sure that either the packet or the ACK (or NACK) for the packet has been lost, as compared to the real scenario, where the ACK (or NACK) might still be on the way to the sender, after the timer expires. However, to detect the loss, for each packet, a timer of constant duration will still be necessary at the sender.",
    section: "3.4",
  },
  {
    question:
      "R12. Visit the Go-Back-N Java applet at the companion Web site. a. Have the source send five packets, and then pause the animation before any of the five packets reach the destination. Then kill the first packet and resume the animation. Describe what happens. b. Repeat the experiment, but now let the first packet reach the destination and kill the first acknowledgment. Describe again what happens. c. Finally, try sending six packets. What happens?",
    answer:
      "12. a) The packet loss caused a time out after which all the five packets were retransmitted. b) Loss of an ACK didn\u2019t trigger any retransmission as Go-Back-N uses cumulative acknowledgements. c) The sender was unable to send sixth packet as the send window size is fixed to 5.",
    section: "3.4",
  },
  {
    question:
      "R13. Repeat R12, but now with the Selective Repeat Java applet. How are Selective Repeat and Go-Back-N different? SECTION 3.5",
    answer:
      "13. a) When the packet was lost, the received four packets were buffered the receiver. After the timeout, sender retransmitted the lost packet and receiver delivered the buffered packets to application in correct order. b) Duplicate ACK was sent by the receiver for the lost ACK. c) The sender was unable to send sixth packet as the send window size is fixed to 5 When a packet was lost, GO-Back-N retransmitted all the packets whereas Selective Repeat retransmitted the lost packet only. In case of lost acknowledgement, selective repeat sent a duplicate ACK and as GO-Back-N used cumulative acknowledgment, so that duplicate ACK was unnecessary.",
    section: "3.4",
  },
  {
    question:
      "R14. True or false? a. Host A is sending Host B a large file over a TCP connection. Assume Host B has no data to send Host A. Host B will not send acknowledgments to Host A because Host B cannot piggyback the acknowledgments on data. b. The size of the TCP rwnd never changes throughout the duration of the connection. c. Suppose Host A is sending Host B a large file over a TCP connection. The number of unacknowledged bytes that A sends cannot exceed the size of the receive buffer. d. Suppose Host A is sending a large file to Host B over a TCP connection. If the sequence number for a segment of this connection is m, then the sequence number for the subsequent segment will necessarily be m + 1. e. The TCP segment has a field in its header for rwnd. f. Suppose that the last SampleRTT in a TCP connection is equal to 1 sec. The current value of TimeoutInterval for the connection will necessarily be \u00da 1 sec. g. Suppose Host A sends one segment with sequence number 38 and 4 bytes of data over a TCP connection to Host B. In this same segment the acknowledgment number is necessarily 42.",
    answer: "14. a) false b) false c) true d) false e) true f) false g) false",
    section: "3.5",
  },
  {
    question:
      "R15. Suppose Host A sends two TCP segments back to back to Host B over a TCP connection. The first segment has sequence number 90; the second has sequence number 110. a. How much data is in the first segment? b. Suppose that the first segment is lost but the second segment arrives at B. In the acknowledgment that Host B sends to Host A, what will be the acknowledgment number?PROBLEMS",
    answer: "15. a) 20 bytes b) ack number = 90",
    section: "3.5",
  },
  {
    question:
      "R16. Consider the Telnet example discussed in Section 3.5. A few seconds after the user types the letter \u2018C,\u2019 the user types the letter \u2018R.\u2019 After typing the letter \u2018R,\u2019 how many segments are sent, and what is put in the sequence number and acknowledgment fields of the segments?",
    answer:
      "16. 3 segments. First segment: seq = 43, ack =80; Second segment: seq = 80, ack = 44; Third segment; seq = 44, ack = 81",
    section: "3.5",
  },
  {
    question:
      "R17. Consider two hosts, Host A and Host B, transmitting a large file to Server C over a bottleneck link with a rate of R kbps. To transfer the file, the hosts use TCP with the same parameters (including MSS and RTT) and start their transmissions at the same time. Host A uses a single TCP connection for the entire file, while Host B uses 9 simultaneous TCP connections, each for a portion (i.e., a chunk) of the file. What is the overall transmission rate achieved by each host at the beginning of the file transfer? (Hint: the overall transmission rate of a host is the sum of the transmission rates of its TCP connections.) Is this situation fair?",
    answer: "17. R/2",
    section: "3.7",
  },
  {
    question:
      "R18. True or false? Consider congestion control in TCP. When the timer expires at the sender, the value of ssthresh is set to one half of its previous value.",
    answer:
      "18. False, it is set to half of the current value of the congestion window.",
    section: "3.7",
  },
  {
    question:
      "R19. According to the discussion of TCP splitting in the sidebar in Section 3.7, the response time with TCP splitting is approximately 4 3 RTT FE 1 RTT BE 1 processing time, as opposed to 4 3 RTT 1 processing time when a direct connection is used. Assume that RTT BE is 0.5 3 RTT. For what values of RTT FE does TCP splitting have a shorter delay than a direct connection?",
    answer:
      "19. Let X = RTT FE , Y = RTT BE and ST = Search time. Consider the following timing diagram.",
    section: "3.7",
  },
];

export default CHAPTER3;
