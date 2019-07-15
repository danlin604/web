import React from 'react'
import styled from 'styled-components'
import 'aframe'
import 'Lib/aframe-low-poly.min'
import 'Lib/aframe-star-system-component'
import 'aframe-orbit-controls'

export const SolarSystem = () => {
  return (
    <Layout>
      <Content>
        <a-scene background="color: #FAFAFA" embedded>
          {/* Animation */}
          <a-mixin
            id="rotation"
            animation="property: rotation; loop: true; from:  0 0 0; to: 0 360 0; dur: 20000; easing: linear;"
          />

          <a-mixin
            id="orbit"
            animation="property: rotation; loop: true; to: 0 360 0; dur: 40000; easing: linear;"
          />

          {/* Light */}
          <a-entity id="basic-light" light="type: ambient; color: #BBB" />

          {/* Camera */}
          <a-camera orbit-controls="target: 0 1.6 -0.5; initialPosition: -5 5 20" />

          {/* Background */}
          <a-sky color="#212121" />
          <a-entity star-system="count: 1000; radius: 250; depth: 0" />

          {/* orbit */}
          <a-entity
            geometry="primitive: torus; radius: 3; radiusTubular: 0.01;segmentsTubular: 50"
            material="color: #FFFFFF;opacity: 0.3"
            rotation="90 0 0"
            scale="2 2 0.1"
          />
          <a-entity
            geometry="primitive: torus; radius: 4.24; radiusTubular: 0.01;segmentsTubular: 50"
            material="color: #FFFFFF;opacity: 0.3"
            rotation="90 0 0"
            scale="2 2 0.1"
          />
          <a-entity
            geometry="primitive: torus; radius: 5.24; radiusTubular: 0.01;segmentsTubular: 50"
            material="color: #FFFFFF;opacity: 0.3"
            rotation="90 0 0"
            scale="2 2 0.1"
          />
          <a-entity
            geometry="primitive: torus; radius: 6.25; radiusTubular: 0.01;segmentsTubular: 50"
            material="color: #FFFFFF;opacity: 0.3"
            rotation="90 0 0"
            scale="2 2 0.1"
          />
          <a-entity
            geometry="primitive: torus; radius: 12.1; radiusTubular: 0.01;segmentsTubular: 50"
            material="color: #FFFFFF;opacity: 0.3"
            rotation="90 0 0"
            scale="2 2 0.1"
          />
          <a-entity
            geometry="primitive: torus; radius: 15.55; radiusTubular: 0.01;segmentsTubular: 50"
            material="color: #FFFFFF;opacity: 0.3"
            rotation="90 0 0"
            scale="2 2 0.1"
          />
          <a-entity
            geometry="primitive: torus; radius: 18.05; radiusTubular: 0.01;segmentsTubular: 50"
            material="color: #FFFFFF;opacity: 0.3"
            rotation="90 0 0"
            scale="2 2 0.1"
          />
          <a-entity
            geometry="primitive: torus; radius: 20.05; radiusTubular: 0.01;segmentsTubular: 50"
            material="color: #FFFFFF;opacity: 0.3"
            rotation="90 0 0"
            scale="2 2 0.1"
          />
          <a-entity
            geometry="primitive: torus; radius: 23.05; radiusTubular: 0.01;segmentsTubular: 50"
            material="color: #FFFFFF;opacity: 0.3"
            rotation="90 0 0"
            scale="2 2 0.1"
          />

          {/* Sun */}
          <lp-sphere
            id="sun"
            position="0 0 0"
            radius="4"
            mixin="rotation"
            light="type: point"
            material="shader: flat"
            color="#ffd600"
            segments-width="16"
            segments-height="16"
            amplitude="0.06"
          >
            <a-text
              align="center"
              value="Sun"
              scale="4 4 4"
              position="0 4.5 0"
            />
          </lp-sphere>

          {/* Mercury */}
          <a-entity id="orbit-mercury" mixin="orbit" animation="dur: 20000;">
            <lp-sphere
              id="mercury"
              position="0 0 6"
              radius=".25"
              mixin="rotation"
              color="#AF886D"
              segments-width="4"
              segments-height="4"
              amplitude="0.05"
            >
              <a-text align="center" value="Mercury" position="0 .5 0" />
            </lp-sphere>
          </a-entity>

          {/* Venus */}
          <a-entity id="orbit-venus" mixin="orbit">
            <lp-sphere
              id="venus"
              position="0 0 8.5"
              radius=".5"
              color="#ECBFBF"
              mixin="rotation"
              segments-width="8"
              segments-height="8"
              amplitude="0.04"
            >
              <a-text align="center" value="Venus" position="0 .75 0" />
            </lp-sphere>
          </a-entity>

          {/* Mars */}
          <a-entity id="orbit-mars" mixin="orbit">
            <lp-sphere
              id="mars"
              position="0 0 12.5"
              radius=".25"
              color="#CF503A"
              mixin="rotation"
              segments-width="4"
              segments-height="4"
              amplitude="0.04"
            >
              <a-text align="center" value="Mars" position="0 0.5 0" />
            </lp-sphere>
          </a-entity>

          {/* Jupiter */}
          <a-entity id="orbit-jupiter" mixin="orbit" animation="dur: 90000;">
            <lp-sphere
              id="jupiter"
              position="0 0 24"
              radius="1"
              color="#C9957A"
              mixin="rotation"
              segments-width="8"
              segments-height="8"
              amplitude="0.04"
            >
              <a-text align="center" value="Jupiter" position="0 1.25 0" />
            </lp-sphere>
          </a-entity>

          {/* Pluto */}
          <a-entity id="orbit-pluto" mixin="orbit" animation="dur: 80000;">
            <lp-sphere
              id="pluto"
              position="0 0 46"
              radius=".10"
              color="#BFCFD4"
              mixin="rotation"
              segments-width="3"
              segments-height="3"
              amplitude="0.03"
            >
              <a-text align="center" value="Pluto" position="0 0.35 0" />
            </lp-sphere>
          </a-entity>

          {/* Earth & Moon */}
          <a-entity id="orbit-earth" mixin="orbit" animation="dur: 30000;">
            <a-entity id="earth-and-moon" position="0 0 10.5">
              <a-entity id="earth-container">
                {/* Earth */}
                <lp-sphere
                  position="0 0 0"
                  radius=".5"
                  color="#6DCBE7"
                  id="earth"
                  mixin="rotation"
                  segments-width="8"
                  segments-height="8"
                  amplitude="0.04"
                >
                  <a-text align="center" value="Earth" position="0 0.75 0" />
                </lp-sphere>
                <a-entity id="moon-container" mixin="orbit">
                  {/* Moon */}
                  <lp-sphere
                    position="-1 0 0"
                    radius=".10"
                    color="#DBE0DE"
                    id="moon"
                    segments-width="3"
                    segments-height="3"
                    amplitude="0.04"
                  >
                    <a-text align="center" value="Moon" position="0 0.35 0" />
                  </lp-sphere>
                </a-entity>
              </a-entity>
            </a-entity>
          </a-entity>

          {/* Saturn */}
          <a-entity id="orbit-saturn" mixin="orbit">
            <a-entity id="saturn-container" position="0 0 31">
              <lp-sphere
                position="0 0 0 "
                radius=".8"
                color="#F8EC99"
                id="saturn"
                mixin="rotation"
                segments-width="8"
                segments-height="8"
                amplitude="0.04"
              />
              <a-torus
                id="saturn-ring-1"
                color="#57524A"
                segments-tubular="50"
                radius="3.2"
                radius-tubular="0.1"
                rotation="90 0 0"
                scale=".44 .44 0.04"
              />
              <a-torus
                id="saturn-ring-2"
                color="#A29A87"
                segments-tubular="50"
                radius="2.4"
                radius-tubular="0.2"
                rotation="90 0 0"
                scale=".44 .44 0.04"
              />
              <a-text align="center" value="Saturn" position="0 1.05 0" />
            </a-entity>
          </a-entity>

          {/* Uranus */}
          <a-entity id="orbit-uranus" mixin="orbit" animation="dur: 70000;">
            <a-entity id="uranus-container" position="0 0 36">
              <lp-sphere
                id="uranus"
                radius=".75"
                color="#73AAF8"
                mixin="rotation"
                segments-width="8"
                segments-height="8"
                amplitude="0.04"
              />
              <a-torus
                id="uranus-ring"
                color="#FFFFFF"
                segments-tubular="50"
                radius="1.5"
                radius-tubular="0.01"
                rotation="-10 90 0"
                scale=".75 .75 0.075"
              />
              <a-text align="center" value="Uranus" position="0 1 0" />
            </a-entity>
          </a-entity>

          {/* Neptune */}
          <a-entity id="orbit-neptune" mixin="orbit" animation="dur: 35000;">
            <a-entity id="neptune-container" position="0 0 40">
              <lp-sphere
                id="neptune"
                radius=".75"
                color="#3453BD"
                mixin="rotation"
                segments-width="8"
                segments-height="8"
                amplitude="0.04"
              />
              <a-torus
                id="neptune-ring-1"
                color="#FFFFFF"
                segments-tubular="50"
                radius="2"
                radius-tubular="0.01"
                rotation="90 0 0"
                scale=".75 .75 0.075"
                opacity="0.8"
              />
              <a-torus
                id="neptune-ring-2"
                color="#FFFFFF"
                segments-tubular="50"
                radius="1.7"
                radius-tubular="0.05"
                rotation="90 0 0"
                scale=".75 .75 0.075"
                opacity="0.8"
              />
              <a-torus
                id="neptune-ring-3"
                color="#FFFFFF"
                segments-tubular="50"
                radius="1.3"
                radius-tubular="0.01"
                rotation="90 0 0"
                scale=".75 .75 0.075"
                opacity="0.8"
              />
              <a-text align="center" value="Neptune" position="0 1 0" />
            </a-entity>
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
  margin: 0;
  height: 100%;
  width: 100%;
`
