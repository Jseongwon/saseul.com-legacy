<template>
  <div>
    <div class="tutorial-info">
      Easily start initialize and configure SASEUL blockchain network with
      following instructions.<br />
      Following instructions are suitable with SASEUL AMI v.0.5.
    </div>
    <div class="tutorial-button-wrapper">
      <button
        type="button"
        @click="toggleTutorial(0)"
        :class="{ selected: this.toggleMode === 0 }"
      >
        Create SASEUL EC2 Instance
      </button>
      <div class="divider"></div>
      <button
        type="button"
        @click="toggleTutorial(1)"
        :class="{ selected: this.toggleMode === 1 }"
      >
        Create SASEUL Network
      </button>
      <div class="divider"></div>
      <button
        type="button"
        @click="toggleTutorial(2)"
        :class="{ selected: this.toggleMode === 2 }"
      >
        Create SASEUL Node
      </button>
      <div class="divider"></div>
      <button
        type="button"
        @click="toggleTutorial(3)"
        :class="{ selected: this.toggleMode === 3 }"
      >
        Promote Node<br />& Join Network
      </button>
    </div>

    <!-- Create SAESUL EC2 Instance -->
    <transition name="fade" mode="in-out">
      <div class="tutorial-content" v-if="this.toggleMode === 0">
        <div>
          <h1>Create SASEUL EC2 Instance</h1>
          <h2>Access SASEUL AMI on AWS Marketplace</h2>
          Search as 'saseul' in AWS Marketplace or just click the
          <a
            target="_blank"
            href="https://aws.amazon.com/marketplace/pp/B07SHW8NBD?qid=1560915452077&sr=0-1&ref_=srh_res_product_title"
          >
            product page link</a
          >.
          <br />
          You can check product overview, pricing, usage, support and user
          review of SASEUL AMI below. Please subscribe the product for use
          SASEUL. There is a one-month free trial exists.<br />
          <span class="important-text">
            <span class="alert">(Important!)</span> A One-month free trial is
            only valid for a single instance per single AWS accounts. If you
            create multiple instances in a single AWS account, it will cause
            costs.</span
          >
          <img @click="openImg" src="@/assets/BaaS-img/2.png" />
          <img @click="openImg" src="@/assets/BaaS-img/3.png" />

          <h2>Configure SASEUL Instance</h2>
          At first, choose a fulfillment option, software version, and region.
          Now, there is only one option for fulfillment option and software
          version. After you finish choose, click 'continue to launch' button
          <img @click="openImg" src="@/assets/BaaS-img/4.png" />

          Then you can configure the instance. There are three ways to configure
          SASEUL network. If you are new to AWS EC2 instance,
          <span class="hightlight">Launch through EC2</span> option recommended.
          <img @click="openImg" src="@/assets/BaaS-img/5.png" />

          <div class="tutorial-suboption-button-wrapper">
            <button
              type="button"
              @click="toggleLaunchMode(0)"
              :class="{ selected: this.launchMode === 0 }"
            >
              Launch through EC2
            </button>
            <!--<div class="divider"></div>-->
            <button
              type="button"
              @click="toggleLaunchMode(1)"
              :class="{ selected: this.launchMode === 1 }"
            >
              Launch through Website
            </button>
            <!--<div class="divider"></div>-->
            <button
              type="button"
              @click="toggleLaunchMode(2)"
              :class="{ selected: this.launchMode === 2 }"
            >
              Copy to Service Catalog
            </button>
          </div>

          <transition name="fade" mode="in-out">
            <div class="" v-if="this.launchMode === 0">
              <h3>Launch through EC2</h3>
              At first, choose an EC2 instance type. Recommended option is
              <span class="hightlight">m5.large</span>.
              <br />
              You <span class="alert">should not click</span>
              <span class="hightlight">review and launch</span> button. Default
              settings of EC2 instance may occur security group issue and
              network issue. Please move to the next step through
              <span class="hightlight">Next: Configure Instance Details</span>
              button.
              <img @click="openImg" src="@/assets/BaaS-img/7-1-instance.png" />

              Configure instance details. You can prevent extra charging by
              unchecking <span class="hightlight">T2/T3 Unlimited</span>
              option.
              <img @click="openImg" src="@/assets/BaaS-img/7-2-detail.png" />

              Add storage volume for node. Using default is okay. Checking
              <span class="hightlight">Delete on Termination</span> option can
              cause a severe problem when the network has been closed for any
              reason.
              <img @click="openImg" src="@/assets/BaaS-img/7-3-storage.png" />

              You can add a tag for your network. If you have plenty of
              instances, attaching tag is recommended.
              <img @click="openImg" src="@/assets/BaaS-img/7-4-tag.png" />

              You can choose an existing security group or create a new security
              group both. You <span class="alert">must</span> open port
              <span class="code-block">:22</span> and
              <span class="code-block">:80</span>.
              <img @click="openImg" src="@/assets/BaaS-img/7-5-security.png" />

              After review instance configuration, click the
              <span class="hightlight">launch</span> button.
              <img @click="openImg" src="@/assets/BaaS-img/7-6-review.png" />

              Choose the key pair that you can access. If there is no key pair
              available, you can create key pair at link below.
              <img @click="openImg" src="@/assets/BaaS-img/7-7-keypair.png" />
            </div>
          </transition>

          <transition name="fade" mode="in-out">
            <div class="" v-if="this.launchMode === 1">
              <h3>Launch through Website</h3>
              At first, choose EC2 instance type. Recommended option is
              <span class="hightlight">m5.large</span>.
              <img
                @click="openImg"
                src="@/assets/BaaS-img/6-1-EC2instance.png"
              />

              VPC(Virtual Private CLoud) requires for start AWS resource. If
              there is no VPC at your AWS Account, click link below and create
              VPC first.
              <img @click="openImg" src="@/assets/BaaS-img/6-2-vpc.png" />

              Subnet also requires. As same as VPC, you can create subnet
              through link below.
              <img @click="openImg" src="@/assets/BaaS-img/6-3-subnet.png" />

              You can choose existing security group or create new security
              group both. You <span class="alert">must</span> open port
              <span class="hightlight">:22</span> and
              <span class="hightlight">:80</span>.
              <img
                @click="openImg"
                src="@/assets/BaaS-img/6-4-securitygroup.png"
              />

              Choose key pair that you can access. If there is no key pair
              available, you can create key pair at the link below.
              <img @click="openImg" src="@/assets/BaaS-img/6-5-keypair.png" />
            </div>
          </transition>

          <transition name="fade" mode="in-out">
            <div class="" v-if="this.launchMode === 2">
              <h3>Copy to Service Catalog</h3>
              <span class="hightlight">Copy to Service Catalog</span> is not a
              instance launching option. When you select it and click next, AWS
              will copy SASEUL Catalog to your Service Catalog console without
              instance creation. If your want to create SASEUL Nodes and
              configure network, please select other option.
            </div>
          </transition>
        </div>
      </div>
    </transition>

    <!-- Create SASEUL Network  -->
    <transition name="fade" mode="in-out">
      <div class="tutorial-content" v-if="this.toggleMode === 1">
        <h1>Create SASEUL Network & Genesis Node</h1>
        <h2>Access AWS EC2 Instance</h2>
        First, access to EC2 instance with SASEUL AMI through SSH.<br />
        (You have to
        <span @click="toggleTutorial(0)" class="saseul-hightlight"
          >Create SASEUL EC2 Instance</span
        >
        before creating the network.)

        <div class="code-box">
          $ ssh -i <span class="dynamic">YOUR/PATH/YOUR_PEM</span>.pem
          ubuntu@<span class="dynamic">INSTANCE_PUBLIC_IP</span>
        </div>

        <h2>Execute saseul-initiator</h2>
        Check the directory and explore to
        <span class="code-block">/basmith</span> directory first. Every
        following command should be executed at
        <span class="code-block">/basmith</span>.
        <div class="code-box">
          $ pwd<br />
          /home/ubuntu<br />
          $ cd basmith
        </div>

        <h2>Configure network with SASEUL initiator</h2>
        Execute <span class="code-block">./saseul-initiator genesis</span> for
        creating a network.
        <div class="code-box">
          $ ./saseul-initiator genesis<br />
          <span class="remark"
            >Configure SASEUL as a new network.<br />
            Please fill in the required information.</span
          >
        </div>
        <br />
        Then, you can create a genesis node that going to create a genesis
        block. Configure the genesis node through followings. Empty input means
        using the default. (You <span class="alert">don't</span> have to copy
        and paste the default value.)
        <div class="code-box">
          --> Please enter the node private key. [default:
          <span class="default">DEFAULT_PRIVATE_KEY</span>] :<br />
          --> Please enter the node public key. [default:
          <span class="default">DEFAULT_PUBLIC_KEY</span>] :<br />
          --> Please enter the node address. [default:
          <span class="default">DEFAULT_ADDRESS</span>] :
        </div>
        <br />
        After node configuration, you should set IP of the network. You should
        input public IP for external public access. External public access is
        necessary for the tracker web page.
        <div class="code-box">
          --> Please enter the node host name or IP address.<br />[default:
          <span class="default">INSTANCE_PRIVATE_IP</span>] :
          <span class="dynamic">INSTANCE_PUBLIC_IP</span>
        </div>
        <br />
        You can access to public IP of instance at EC2 console.
        <img @click="openImg" src="@/assets/BaaS-img/8-publicIP.png" />

        <br />
        Now, you can set an amount of total coin in network and amount of coin
        to deposit. (Depose to genesis node; validator) Default total amount is
        1,000 billion. Default deposit amount is 200 billion.
        <div class="code-box">
          --> Please enter the amount of coin to generate during genesis block
          configuration. <br />[default:
          <span class="default">1,000,000,000,000,000</span>] :<br />
          --> Please enter the amount of coin to deposit during genesis block
          configuration. <br />[default:
          <span class="default">200,000,000,000,000</span>] :
        </div>
        <br />

        Choose the node to be genesis node and configure node IP of genesis
        node. <br />
        The default of node host is the network host that you entered before.
        <div class="code-box">
          --> Please enter the selected node address for the genesis node.<br />
          [default: <span class="default">DEFAULT_NODE_ADDRESS</span>] :<br />
          --> Please enter the selected node host name or IP address for the
          genesis node.<br />
          [default: <span class="default">YOUR_NETWORK_HOST</span>] :
        </div>
        <br />
        At last, set your block generation time. Unit of block generation time
        is ms(millisecond). (You don't have to enter 'ms' after number.)
        <div class="code-box">
          --> Please select the block generation time. (unit: ms) [default:
          <span class="default">3,000</span>]
        </div>
        <br />

        Finally, you can check the configuration that you entered.<br />
        Check configuration and enter <span class="code-block">Y</span> for
        creating a network with configurations above.
        <div class="code-box">
          The entered values are as follows.<br />
          <br />
          ## Genesis<br />
          - Coin: <span class="your-input">YOUR_COIN_TOTAL</span><br />
          - Deposit: <span class="your-input">YOUR_COIN_DEPOSIT</span><br />
          - Address: <span class="your-input">YOUR_GENESIS_ADDRESS</span><br />
          ## Node Account<br />
          - Private key: <span class="your-input">DEFAULT_PRIVATE_KEY</span
          ><br />
          - Public key: <span class="your-input">DEFAULT_PUBLIC_KEY</span><br />
          - Address: <span class="your-input">DEFAULT_ADDRESS</span><br />
          ## Tracker<br />
          - Genesis host: <span class="your-input">YOUR_GENESIS_HOST</span
          ><br />
          - Node host: <span class="your-input">YOUR_NODE_HOST</span><br />
          ## Chunk Interval<br />
          - Interval: <span class="your-input">YOUR_INTERVAL</span><br />
          <br />
          --> Would you like to create a configuration file based on the
          information above? (y/N) : y
        </div>

        <br />
        If you can see the information of genesis block (Block Number: 1) and
        some information like below, it means network created successfully.
        After executing command
        <span class="code-block">source ~/.bashrc</span>, you can use saseul-cli
        commands. You can see the available saseul-cli commands by entering
        <span class="code-block">saseul-cli help</span>.
        <div class="code-box">
          ...<br />
          Waiting...<br />
          # Block Data<br />
          &ensp; ## Block Number: 1<br />
          &ensp; &ensp; * Last block hash:<br />
          &ensp; &ensp; * Block hash:
          <span class="your-input">YOUR_BLOCK_HASH</span><br />
          &ensp; &ensp; * Transaction count: 2<br />
          <br />
          Please execute the following command.
          <span class="important">source ~/.bashrc</span> <br />
          See node information: http://<span class="your-input"
            >YOUR_NODE_IP</span
          >/tracker<br />
        </div>
      </div>
    </transition>

    <!-- Create SASEUL Node  -->
    <transition name="fade" mode="in-out">
      <div class="tutorial-content" v-if="this.toggleMode === 2">
        <h1>Create SASEUL Node & Join Existing Network</h1>
        <h2>Create and Access to AWS EC2 Instance</h2>
        As same as creating a network, create EC2 instance with SASEUL AMI and
        access through SSH. You can follow instructions in
        <span @click="toggleTutorial(0)" class="saseul-hightlight"
          >Create SASEUL EC2 Instance</span
        >.<br />
        After create, access to node through SSH.
        <div class="code-box">
          $ ssh -i <span class="dynamic">YOUR/PATH/YOUR_PEM</span>.pem
          ubuntu@<span class="dynamic">INSTANCE_PUBLIC_IP</span>
        </div>

        As like network creating step, every following command should be
        executed at <span class="code-block">/basmith</span>.
        <div class="code-box">
          $ pwd<br />
          /home/ubuntu<br />
          $ cd basmith
        </div>

        <h2>Configure Node with SASEUL initiator</h2>
        In this time, execute
        <span class="code-block">./saseul-initiator light</span> for creating a
        node without network.
        <div class="code-box">
          $ ./saseul-initiator light<br />
          <span class="remark"
            >Configure SASEUL as an existing network.<br />
            Please fill in the required information.</span
          >
        </div>
        <br />
        Then, configure the node key and address through followings. Empty input
        means using the default. (You <span class="alert">don't</span> have to
        copy and paste the default value.)
        <div class="code-box">
          --> Please enter the node private key. [default:
          <span class="default">DEFAULT_PRIVATE_KEY</span>] :<br />
          --> Please enter the node public key. [default:
          <span class="default">DEFAULT_PUBLIC_KEY</span>] :<br />
          --> Please enter the node address. [default:
          <span class="default">DEFAULT_ADDRESS</span>] :
        </div>
        <br />
        Set IP of the new node. You should input public IP for external public
        access.<br />
        <div class="code-box">
          --> Please enter the node host name or IP address.<br />
          [default: <span class="default">INSTANCE_PRIVATE_IP</span>]:
          <span class="dynamic">INSTANCE_PUBLIC_IP</span>
        </div>
        <br />
        Please enter the same value in the genesis block. Please request to
        network administrator if you don't know. Network administrator can check
        genesis configuration by executing
        <span class="code-block">$ cat .env</span> at network instance.<br />
        Configuring some values(i.e. coin amount, Fee rate) different with
        genesis configuration can cause connection problem.
        <div class="code-box">
          --> Please enter the amount of coin to generate during genesis block
          configuration. <br />[default:
          <span class="default">1,000,000,000,000,000</span>] :<br />
          --> Please enter the amount of coin to deposit during genesis block
          configuration. <br />[default:
          <span class="default">200,000,000,000,000</span>] :
        </div>
        <br />
        Input address of genesis node in the network to join. As same as before,
        request to network administrator if you don't know the address.
        <div class="code-box">
          --> Please enter the selected node address for the genesis node.<br />
          [default: <span class="default">0x06...</span>] :
          <span class="dynamic">GENESIS_NODE_ADDRESS</span>
        </div>
        <br />
        Host name(host IP) is the IP address or domain of the network that
        contains the genesis node. If you don't know the IP of host network to
        join, request to administrator of the network.
        <div class="code-box">
          --> Please enter the selected node host name or IP address for the
          genesis node.<br />
          [default: <span class="default">tutorial.saseul.net</span>] :
          <span class="dynamic">HOST_NETWORK_PUBLIC_IP</span>
        </div>
        <br />
        Enter same value with the genesis configuration for the block generation
        time too.
        <div class="code-box">
          --> Please select the block generation time. (unit: ms) [default:
          <span class="default">3,000</span>]
        </div>
        <br />
        Finally, you can see the configuration that you entered.<br />
        Check configuration and enter <span class="code-block">y</span> for
        creating a node with configurations above.
        <div class="code-box">
          The entered values are as follows.<br />
          <br />
          ## Genesis<br />
          - Coin: <span class="your-input">GENESIS_COIN_TOTAL</span><br />
          - Deposit: <span class="your-input">GENESIS_COIN_DEPOSIT</span><br />
          - Address: <span class="your-input">GENESIS_ADDRESS</span><br />
          ## Node Account<br />
          - Private key: <span class="your-input">DEFAULT_PRIVATE_KEY</span
          ><br />
          - Public key: <span class="your-input">DEFAULT_PUBLIC_KEY</span><br />
          - Address: <span class="your-input">DEFAULT_ADDRESS</span><br />
          ## Tracker<br />
          - Genesis host: <span class="your-input">GENESIS_HOST</span><br />
          - Node host: <span class="your-input">YOUR_NODE_HOST</span><br />
          ## Chunk Interval<br />
          - Interval: <span class="your-input">YOUR_INTERVAL</span><br />
          <br />
          --> Would you like to create a configuration file based on the
          information above? [y/N] : y
        </div>

        <br />
        If you can check messages like below, it means node created
        successfully. After executing command
        <span class="code-block">source ~/.bashrc</span>, you can use saseul-cli
        commands. You also can see the available saseul-cli commands by entering
        <span class="code-block">saseul-cli help</span>.
        <div class="code-box">
          ...<br />
          Read information about the node connected to the network.<br />
          Please execute the following command.
          <span class="important">source ~/.bashrc</span> <br />
          Please assume the role from a Validator in SASEUL Network.<br />
          See node information: http://<span class="your-input"
            >YOUR_NODE_IP</span
          >/tracker<br />
        </div>
        For assume the role to the created node, please follow the instruction
        in
        <span class="saseul-hightlight" @click="toggleTutorial(3)"
          >Promote node & Join Network</span
        >.
      </div>
    </transition>

    <transition name="fade" mode="in-out">
      <div class="tutorial-content" v-if="this.toggleMode === 3">
        <h1>Join network & Promote node</h1>
        <h2>Before start</h2>
        In this step, you should access to host node(genesis node) and light
        node(node to promote) both.<br />
        For prevent confusion, each node's console will describe as follows:
        <div class="code-box code-box-genesis">
          # Console of Host Node - Grey Background
        </div>
        <div class="code-box code-box-light">
          # Console of Light Node - Blue Background
        </div>

        <br />
        <h2>Get Node Address</h2>
        Deposing a specific amount of coin for the node is necessary for
        Validator promotion. For make deposit, you have to send a coin from the
        host node to the light node via its address. At first, get the address
        of the light node.
        <div class="code-box code-box-light">
          <span class="remark"
            ># if you are already at ~basmith/, skip the first line.</span
          ><br />
          <span class="remark"
            ># Every following code after this should execute at ~basmith/</span
          ><br />
          $ cd basmith/<br />
          $ saseul-cli account-list<br />
          <br />
          [SASEUL CLI ASKII]<br />
          <br />
          Accounts:<br />
          * [0] <span class="your-input">YOUR_LIGHT_NODE_ADDRESS</span>
        </div>

        <br />
        <h2>Send Coin to New Node</h2>
        Then, send a coin from the host node to the light node through its
        address. Execute saseul cli command
        <span class="code-block">send-coin</span>to send coin.
        <div class="code-box code-box-genesis">
          <span class="remark"
            ># if you are already at ~basmith/, skip the first line.</span
          ><br />
          <span class="remark"
            ># Every following code after this should execute at ~basmith/</span
          ><br />
          $ saseul-cli send-coin
          <span class="dynamic">LIGHT_NODE_ACCOUNT</span>
          <span class="dynamic">AMOUNT_TO_SEND</span> <br />
          <br />
          [SASEUL CLI ASKII]<br />
          <br />
          Send coin...<br />
          <br />
          Transaction ID: <span class="your-input">YOUR_TRANSCATION_ID</span
          ><br />
          <br />
          From: <span class="your-input">GENESIS_NODE_ADDRESS</span><br />
          To: <span class="your-input">LIGHT_NODE_ADDRESS</span><br />
          Amount: <span class="your-input">AMOUNT_TO_SEND</span><br />
          Fee: <span class="your-input">YOUR_FEE</span>
        </div>
        If you can see transaction data (transaction id, from, to, amount, fee),
        it means transaction created successfully.

        <br />
        <h2>Promote Node and Add to Network</h2>
        Now, you have to add the light node to network with
        <span class="code-block">./saseul-add-node</span> script. Execute a
        command at the light node console. Validator(consensus node) and
        Supervisor(validator observer) is an available option in v.0.5 but
        Arbiter is not supported. Please contact directly via
        <span @click="openPage('/contact')" class="saseul-hightlight"
          >Contact Us</span
        >
        if your systems require Arbiter.
        <div class="code-box code-box-light">
          $ ./saseul-add-node<br />
          Connect the new node to the existing network.<br />
          The following is the required deposit amount to change the role.<br />
          <br />
          - Validator: 100,000,000,000<br />
          <!-- - Supervisor: 100,000,000<br/>-->
          <!-- - Arbiter: 100,000,000,000<br/>-->
          <br />
          --> Connect the new node to the existing network. Have you received
          Coin from the Validator node of the network you are connecting to?
          (y/n) : <span class="dynamic">y</span><br />
          Please select a role to promote Node. (1: validator, 2: supervisor, 3:
          arbiter) : <span class="dynamic">1</span><br />
          <br />
          0x6f9dfcc4082b685ec57939e391810fa34224d37dc5f80a balance:<br />
          balance : 100000000000<br />
          deposit : 0<br />
          <br />
          <span class="dynamic">
            --! Deposit Transaction is added !--<br />
            ...<br
          /></span>
          <br />
          0x6ffb4eb50f747b6780d143dd03b68f15682e12fc8ef139<br />
          - host : 15.164.128.45<br />
          - rank : validator<br />
          - status : admitted<br />
          - my observed status : admitted<br />
          <br />
          0x6f9dfcc4082b685ec57939e391810fa34224d37dc5f80a<br />
          - host : 13.209.99.59<br />
          - rank : validator<br />
          - status : admitted<br />
          - my observed status : admitted<br />
          <br />
          <span class="dynamic">--! End! !--</span>
        </div>
        <br />
        <h2>Check Tracker</h2>
        Finally, check the tracker of the host node. If your light node has been
        appended to host tracker list as Validator, it means join network and
        node promotion are successfully finished.
        <img @click="openImg" src="@/assets/BaaS-img/9-tracker.png" />
        Congratulations! Now you get your own blockchain network with SASEUL!
      </div>
    </transition>

    <image-modal
      v-if="showModal"
      @close="showModal = false"
      :img-path="modalImgPath"
    />
  </div>
</template>
<script>
import ImageModal from "./imageModal";
import axios from "axios";

export default {
  name: "BaaSTutorial",
  components: { ImageModal },
  data() {
    let toggleMode = 0;
    let launchMode = 0;
    let modalImgPath = "";
    const gistURLSet = {
      createNode:
        "https://gist.githubusercontent.com/blueStragglr/29821916ef3b4646f269d7b2d09894b7/raw/911c275e4d2b1468347eb058a3aeacf605254e5b/gistfile1.txt",
    };
    let gistText = {
      createNode: "",
    };

    return {
      toggleMode,
      launchMode,
      gistURLSet,
      gistText,
      showModal: false,
      modalImgPath,
    };
  },
  mounted() {
    /*
      axios.get(this.gistURLSet.createNode)
        .then(result => {
          this.gistText.createNode = result.data.replace(/(?:\r\n|\r|\n)/g, '<br/>')
        })

       */
  },
  methods: {
    toggleTutorial(mode) {
      this.toggleMode = mode;
    },
    toggleLaunchMode(mode) {
      this.launchMode = mode;
    },
    openImg(e) {
      this.modalImgPath = e.target.src;
      this.showModal = window.innerWidth > 768 && true;
    },
    openPage(path) {
      window.open(path, "_blank");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap");

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}

.fade-leave-to {
  transition: 0s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.tutorial-content {
  margin-top: 20px;
  /*있는게 낫다 아니다!*/
  border: 1px solid #e9e9e9;
  border-radius: 12px;
  padding: 20px;
  /*border: 1px solid #e9e9e9;*/
}

.tutorial-button-wrapper {
  display: flex;
  margin: 30px -10px;
}

.tutorial-button-wrapper > button {
  padding: 10px 20px;
  font-weight: 600;
  color: #808080;
  flex: 1;
  background-color: transparent;
  margin: 10px;
  font-size: 16px;
  box-shadow: none;
  /*border: 1px solid #e9e9e9;*/
  border: none;
  cursor: pointer;
  outline: none;
  transition: 0.25s ease-out;
}

.tutorial-button-wrapper > button:hover {
  color: #2d2d2d;
}

.tutorial-button-wrapper > button:hover.selected,
.tutorial-button-wrapper > button.selected {
  color: #82549d;
  background-color: rgba(130, 84, 157, 0.1);
  /*letter-spacing: -0.3px;*/
}

.divider {
  width: 1px;
  flex: none;
  background-color: #e9e9e9;
  margin: 20px 0;
}

@media screen and (max-width: 768px) {
  .tutorial-button-wrapper {
    flex-direction: column;
  }

  .tutorial-button-wrapper > button > br {
    display: none;
  }

  .tutorial-button-wrapper > button {
    padding: 6px 12px;
    margin: 5px 0;
    text-align: left;
  }

  .divider {
    display: none;
  }
}

/**********  TUTORIAL hn.s ********/

.tutorial-content h1:after {
  content: " ";
  bottom: 0;
  left: 0;
  position: absolute;
  display: inline-block;
  height: 12px;
  width: 100%;
  background-color: rgba(130, 84, 157, 0.2);
}

@media screen and (max-width: 768px) {
  .tutorial-content h1:after {
    display: none;
  }
}

.tutorial-content h1 {
  font-size: 24px;
  font-weight: 600;
  display: inline-block;
  position: relative;
  /*margin-top: 50px;*/
}

.tutorial-content h2 {
  font-size: 21px;
  font-weight: 500;
  margin-top: 50px;
}

.tutorial-content h3 {
}

.tutorial-content img {
  width: 100%;
  max-width: 768px;
  border: 1px solid #e9e9e9;
  margin: 10px auto 30px;
  display: block;
}

.tutorial-content .alert {
  color: #82549d;
  font-weight: 900;
  font-style: italic;
}

.tutorial-content a {
  color: #82549d;
}

.saseul-hightlight {
  font-weight: 600;
  color: #82549d;
  background-color: rgba(130, 84, 157, 0.1);
  cursor: pointer;
}

.hightlight:before {
  content: "<";
}

.hightlight:after {
  content: ">";
}

.hightlight {
  /*padding: 2px 8px;*/
  font-weight: 600;
}

.important-text {
  font-weight: 600;
  font-style: italic;
}

.code-block {
  background-color: #e9e9e9;
  border-radius: 4px;
  color: crimson;
  font-size: 13px;
  padding: 2px 8px;
  font-weight: 500;
}

.tutorial-suboption-button-wrapper {
  /*border: 1px solid #e9e9e9;*/
  display: flex;
  margin: 30px;
}

.tutorial-suboption-button-wrapper > button {
  border-radius: 6px;
  padding: 25px 20px;
  font-weight: 500;
  color: #808080;
  flex: 1;
  background-color: transparent;
  margin: 10px;
  font-size: 16px;
  box-shadow: none;
  border: 1px solid #e9e9e9;
  /*border: none;*/
  cursor: pointer;
  outline: none;
  transition: 0.25s ease-out;
}

.tutorial-suboption-button-wrapper > button:hover {
  color: #2d2d2d;
  border: 1px solid #808080;
}

.tutorial-suboption-button-wrapper > button.selected,
.tutorial-suboption-button-wrapper > button:hover.selected {
  color: #82549d;
  border: 1px solid #82549d;
  /*letter-spacing: -0.3px;*/
}

@media screen and (max-width: 768px) {
  .tutorial-suboption-button-wrapper {
    margin: 10px 0;
    flex-direction: column;
  }

  .tutorial-suboption-button-wrapper > button {
    padding: 10px;
  }
}

/************ CODE BOX *************/
.code-box {
  margin: 10px 0;
  border: 1px solid #e9e9e9;
  border-radius: 8px;

  padding: 15px 30px;
  line-height: 1.8;
  font-family: "Source Code Pro", serif;
  font-size: 14px;

  color: #ffffff;
  background-color: #2d2d2d;
}

/*.code-box.code-box-genesis{*/
/*color: #ffffff;*/
/*background-color: #4d4d4d;*/
/*}*/
.code-box.code-box-light {
  color: #f4f4f4;
  background-color: #182647;
}

.code-box > .dynamic {
  color: #e6e32d;
}

.code-box > .default {
  color: #1db4ed;
}

.code-box > .your-input {
  color: #f25e12;
}

.code-box > .remark > span {
  font-weight: 900;
  color: #cccccc;
}

.code-box > .remark {
  color: #aaaaaa;
}

.code-box > .important {
  color: #00ff41;
}
</style>
