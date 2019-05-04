import React from 'react'
import styled from 'styled-components'
import aframe from 'aframe'

export const Contact = () => {
  return (
    <Layout>
      <Content>
        <a-scene background="color: #FAFAFA" embedded>
        {/* <!-- the sky is our background, try changing the color or removing
            it --> */}
            <a-sky color="midnightblue"></a-sky>

            {/* <!-- our basic planets, these are not to scale in any way--> */}
            <a-sphere id="sun" position="-13 2 -10" radius="4" color="#F5C85D"></a-sphere>
            <a-sphere id="mercury" position="-7 2 -10" radius=".25" color="#AF886D"></a-sphere>
            <a-sphere id="venus" position="-5 2 -10" radius=".5" color="#ECBFBF"></a-sphere>
            <a-sphere id="mars" position="-1 2 -10" radius=".25" color="#CF503A"></a-sphere>

            {/* <!--notice this one doens't have a radius? If you don't specify one,
            A-Frame uses the default, which is 1 --> */}
            <a-sphere id="jupiter" position="1 2 -10" color="#C9957A"></a-sphere>
            <a-sphere id="pluto" position="13 2 -10" radius=".10" color="#BFCFD4"></a-sphere>

            {/* <!-- a not so basic planet- it's Earth with our moon wrapped up
            together in an a-entity component  to keep them organized and placed
            in relation to each other. --> */}

            <a-entity id="earth-and-moon" position="-3 2 -10">

                {/* <!-- the positions in here are in relation to each other, not to
                the other planets, if you want to change the position of that
                you need to do it on a-entity or remove a-entity --> */}
                <a-sphere position="0 0 0" radius=".5" color="#6DCBE7" id="earth"></a-sphere>
                <a-sphere position="-1 0 0" radius=".10" color="#DBE0DE" id="moon"></a-sphere>

            </a-entity>

            {/* <!-- the other not-so-basic planets, these have rings around them.
            The rings are made of torii (singular torus) a shape that can be
            used to make donuts, tubes and yes, ring shapes--> */}
            <a-entity id="saturn-container" position="4 2 -10">
                <a-sphere position="0 0 0 " radius=".8" color="#F8EC99" id="saturn"></a-sphere>
                <a-torus id="saturn-ring-1" color="#57524A" segments-tubular="50" radius="3.2" radius-tubular="0.1"
                    rotation="90 0 0" scale=".44 .44 0.04"></a-torus>
                <a-torus id="saturn-ring-2" color="#A29A87" segments-tubular="50" radius="2.4" radius-tubular="0.2"
                    rotation="90 0 0" scale=".44 .44 0.04"></a-torus>
            </a-entity>

            <a-entity id="uranus-container" position="7 2 -10">
                <a-sphere id="uranus" radius=".75" color="#73AAF8"></a-sphere>
                <a-torus id="uranus-ring" color="#FFFFFF" segments-tubular="50" radius="1.5" radius-tubular="0.01"
                    rotation="-10 90 0" scale=".75 .75 0.075"></a-torus>
            </a-entity>

            <a-entity id="neptune-container" position="10 2 -10">
                <a-sphere id="neptune" radius=".75" color="#3453BD"></a-sphere>
                <a-torus id="neptune-ring-1" color="#FFFFFF" segments-tubular="50" radius="2" radius-tubular="0.01"
                    rotation="90 0 0" scale=".75 .75 0.075" opacity="0.8"></a-torus>
                <a-torus id="neptune-ring-2" color="#FFFFFF" segments-tubular="50" radius="1.7" radius-tubular="0.05"
                    rotation="90 0 0" scale=".75 .75 0.075" opacity="0.8"></a-torus>
                <a-torus id="neptune-ring-3" color="#FFFFFF" segments-tubular="50" radius="1.3" radius-tubular="0.01"
                    rotation="90 0 0" scale=".75 .75 0.075" opacity="0.8"></a-torus>
            </a-entity>
        </a-scene>
      </Content>
    </Layout>
  )
}

const Layout = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Content = styled.article`
  margin: 16px;
  height: 100%;
  width: 100%;
`
