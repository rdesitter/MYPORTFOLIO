/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  let position = [-0.825, -0.9, 0];
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/raphAnim.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {/* highlight-line */
    positionAvatar(window.innerWidth);

    window.addEventListener("resize", (event) => {
      positionAvatar(event.target.innerWidth)
    });

    actions['Armature|mixamo.com|Layer0'].play(); /* highlight-line */
  }); /* highlight-line */

  const positionAvatar = (width) => {
    if(width < 701) {
      group.current.position.x = 0;
      group.current.position.y = -0.5;
    } else {
      group.current.position.x = -1.1;
      group.current.position.y = -0.9;
    }
  }

  return (
    <group ref={group} position={position} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials['Wolf3D_Body.003']} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh name="Wolf3D_Glasses" geometry={nodes.Wolf3D_Glasses.geometry} material={materials['Wolf3D_Glasses.002']} skeleton={nodes.Wolf3D_Glasses.skeleton} />
          <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials['Wolf3D_Hair.001']} skeleton={nodes.Wolf3D_Hair.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.002']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Wolf3D_Outfit_Top.002']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials['Wolf3D_Eye.002']} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
          <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials['Wolf3D_Eye.002']} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials['Wolf3D_Skin.001']} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials['Wolf3D_Teeth.002']} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/raphAnim.glb')