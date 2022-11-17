import * as React from "react";
import { SVGProps } from "react";

const HeaderLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="#FFF"
      d="M80.788 49.417a.62.62 0 0 1-.619.618h-2.18a.619.619 0 0 1-.618-.618V37.413a.62.62 0 0 0-.619-.619h-2.296a.618.618 0 0 1-.618-.618v-1.471c0-.341.277-.618.618-.618h9.248c.341 0 .618.277.618.618v1.471a.618.618 0 0 1-.618.618h-2.298a.62.62 0 0 0-.618.619v12.004zM88.5 46.671c-.341 0-.729.257-.863.569l-.952 2.226c-.134.313-.521.569-.862.569h-2.367c-.341 0-.512-.257-.381-.571l6.359-15.23c.131-.312.516-.57.856-.57h1.414c.341 0 .724.258.852.573l6.183 15.227c.128.315-.045.572-.386.572H95.94c-.341 0-.723-.259-.849-.574l-.888-2.216c-.126-.315-.508-.574-.849-.574H88.5zm2.553-7.754c-.121-.317-.353-.313-.46.009l-1.538 4.619c-.108.323.082.588.423.588H92.4c.341 0 .521-.261.399-.579l-1.746-4.637zM104.02 46.709c0 .341.277.618.618.618h3.6a.62.62 0 0 1 .619.619v1.471a.62.62 0 0 1-.619.618h-7.015a.62.62 0 0 1-.619-.618V34.705c0-.341.277-.618.619-.618h2.178a.62.62 0 0 1 .619.618v12.004zM114.568 36.794a.62.62 0 0 0-.619.619v2.272a.62.62 0 0 0 .619.619h4.203a.62.62 0 0 1 .619.618v1.47a.62.62 0 0 1-.619.618h-4.203a.62.62 0 0 0-.619.619v3.079a.62.62 0 0 0 .619.618h4.412a.62.62 0 0 1 .619.619v1.471a.62.62 0 0 1-.619.618h-7.829a.62.62 0 0 1-.619-.618V34.705a.62.62 0 0 1 .619-.618h7.829c.342 0 .619.277.619.618v1.471a.619.619 0 0 1-.619.618h-4.412zM122.462 34.282a.62.62 0 0 1 .619-.619h1.229c.341 0 .796.216 1.013.477l8.439 10.194c.216.263.44.198.44-.143v-9.486a.62.62 0 0 1 .619-.618h2.181a.62.62 0 0 1 .619.618v15.028a.62.62 0 0 1-.619.618h-1.228c-.341 0-.796-.214-1.013-.476L126.32 39.68c-.216-.261-.439-.197-.439.143v9.594a.62.62 0 0 1-.619.618h-2.181a.62.62 0 0 1-.619-.618V34.282zM146.39 49.417a.62.62 0 0 1-.619.618h-2.181a.62.62 0 0 1-.619-.618V37.413a.62.62 0 0 0-.618-.619h-2.296a.62.62 0 0 1-.619-.618v-1.471a.62.62 0 0 1 .619-.618h9.247a.62.62 0 0 1 .619.618v1.471a.62.62 0 0 1-.619.618h-2.296a.62.62 0 0 0-.618.619v12.004zM162.258 46.671c-.341 0-.729.257-.863.569l-.954 2.226c-.135.313-.522.569-.863.569h-2.366c-.34 0-.511-.257-.38-.57l6.36-15.231c.131-.312.516-.57.856-.57h1.411c.341 0 .725.259.853.573l6.185 15.227c.128.315-.045.572-.386.572h-2.413c-.341 0-.723-.259-.849-.574l-.89-2.216c-.125-.315-.507-.574-.848-.574h-4.853zm2.553-7.754c-.121-.317-.354-.313-.462.009l-1.538 4.619c-.107.323.082.588.423.588h2.925c.341 0 .521-.261.399-.579l-1.747-4.637zM188.293 41.553c.341 0 .607.364.607.712 0 3.988-2.743 8.193-7.961 8.193-5.115 0-8.346-3.935-8.346-8.335 0-4.546 3.322-8.46 8.555-8.46 2.714 0 4.973 1.081 6.546 3.19.25.335.062.774-.319.962s-1.604.775-1.604.775a.848.848 0 0 1-.96-.196s-1.38-1.98-3.756-1.98c-3.301 0-4.93 3.065-4.93 5.709s1.653 5.585 4.952 5.585c1.918 0 3.553-1.358 3.924-3.027.042-.193-.14-.591-.623-.591h-2.401a.62.62 0 0 1-.619-.618v-1.301a.62.62 0 0 1 .619-.618h6.316zM195.231 36.794a.62.62 0 0 0-.618.619v2.272a.62.62 0 0 0 .618.619h4.203c.341 0 .618.278.618.618v1.473c0 .34-.277.618-.618.618h-4.203a.619.619 0 0 0-.618.618v3.078a.62.62 0 0 0 .618.619h4.413c.341 0 .618.277.618.618v1.47c0 .34-.277.618-.618.618h-7.831a.62.62 0 0 1-.619-.618v-14.71a.62.62 0 0 1 .619-.618h7.831c.341 0 .618.277.618.618v1.47a.618.618 0 0 1-.618.618h-4.413zM203.126 34.282a.62.62 0 0 1 .618-.619h1.227c.341 0 .797.216 1.013.477l8.441 10.194c.218.263.406.477.418.477s.022-.278.022-.619v-9.485a.62.62 0 0 1 .619-.618h2.18a.62.62 0 0 1 .619.618v15.027a.62.62 0 0 1-.619.618h-1.227c-.341 0-.796-.214-1.013-.476l-8.441-10.195c-.216-.261-.404-.476-.418-.476-.012 0-.022.278-.022.618v9.594a.62.62 0 0 1-.619.618h-2.18a.619.619 0 0 1-.618-.618V34.282zM232.037 37.778a5.31 5.31 0 0 0-3.286-1.154c-3.279 0-5.161 2.751-5.161 5.499 0 2.688 1.953 5.374 5.138 5.374 1.196 0 2.392-.466 3.31-1.18.206-.16.572-.029.572.26v2.309c0 .341-.262.716-.58.835 0 0-1.599.737-3.396.737-4.929 0-8.578-3.871-8.578-8.271 0-4.526 3.51-8.524 8.647-8.524 1.746 0 3.324.719 3.324.719.32.117.582.49.582.831v2.316c0 .231-.366.413-.572.249zM233.532 34.61c-.182-.287-.052-.522.289-.522h2.737c.341 0 .754.244.919.541l2.47 4.458c.164.297.443.303.62.012l2.708-4.481c.176-.292.598-.529.938-.529h2.762c.341 0 .47.234.285.521l-4.865 7.587a2.485 2.485 0 0 0-.334 1.14v6.082c0 .34-.277.618-.618.618h-2.182a.619.619 0 0 1-.618-.618v-6.082a2.52 2.52 0 0 0-.33-1.142l-4.781-7.585zM79.957 15.168a.62.62 0 0 0-.619.618v1.427a.62.62 0 0 0 .619.619h3.437c.341 0 .618.278.618.618v2.274a.62.62 0 0 1-.618.619h-3.437a.62.62 0 0 0-.619.618v1.513a.62.62 0 0 0 .619.619h3.689a.62.62 0 0 1 .619.618v2.274a.62.62 0 0 1-.619.618h-7.838a.62.62 0 0 1-.619-.618v-14.71a.62.62 0 0 1 .619-.619h7.838a.62.62 0 0 1 .619.619v2.272a.62.62 0 0 1-.619.619h-3.689zM98.025 16.254c-.812-.656-1.853-1.002-2.915-1.002-2.54 0-4.253 1.945-4.253 4.42 0 2.518 1.736 4.337 4.314 4.337 1.016 0 2.031-.367 2.842-.989.27-.208.733-.176.733.255v3.395c0 .34-.266.701-.591.803 0 0-1.778.558-3.066.558-2.223 0-4.338-.848-5.987-2.35-1.756-1.586-2.561-3.659-2.561-6.028 0-2.178.827-4.273 2.349-5.837 1.565-1.607 3.83-2.581 6.071-2.581 1.333 0 3.197.611 3.197.611.323.105.588.47.588.811v3.221c.001.306-.452.594-.721.376zM111.342 17.812a.62.62 0 0 0 .619-.619v-4.916a.62.62 0 0 1 .618-.619h2.908a.62.62 0 0 1 .619.619v14.71a.62.62 0 0 1-.619.618h-2.908a.618.618 0 0 1-.618-.618v-5.299a.62.62 0 0 0-.619-.618h-4.749a.618.618 0 0 0-.618.618v5.299a.62.62 0 0 1-.619.618h-2.908a.618.618 0 0 1-.618-.618v-14.71a.62.62 0 0 1 .618-.619h2.908a.62.62 0 0 1 .619.619v4.916a.62.62 0 0 0 .618.619h4.749zM135.324 19.334c0 5.161-3.701 8.8-8.821 8.8-5.118 0-8.821-3.639-8.821-8.8 0-4.823 4.232-8.207 8.821-8.207 4.591 0 8.821 3.384 8.821 8.207zm-13.327.021c0 2.75 2.031 4.759 4.506 4.759 2.474 0 4.506-2.009 4.506-4.759 0-2.199-2.032-4.21-4.506-4.21-2.475.001-4.506 2.011-4.506 4.21zM148.422 23.476a.62.62 0 0 0 .619.619h3.73a.62.62 0 0 1 .619.619v2.275a.62.62 0 0 1-.619.618h-7.879a.62.62 0 0 1-.619-.618V12.277a.62.62 0 0 1 .619-.619h2.911a.62.62 0 0 1 .618.619v11.199zM172.105 19.336c0 5.16-3.701 8.8-8.82 8.8s-8.821-3.64-8.821-8.8c0-4.822 4.231-8.208 8.821-8.208s8.82 3.386 8.82 8.208zm-13.327.02c0 2.752 2.032 4.76 4.507 4.76 2.474 0 4.505-2.008 4.505-4.76 0-2.199-2.031-4.207-4.505-4.207-2.474 0-4.507 2.008-4.507 4.207zM193.709 24.835c-.341 0-.722.259-.847.576l-.644 1.621c-.125.316-.506.575-.847.575h-3.163c-.341 0-.519-.26-.396-.577l5.689-14.794c.123-.317.501-.578.842-.578h3.29c.341 0 .717.262.836.579l5.57 14.791c.121.318-.059.579-.399.579h-3.183c-.341 0-.717-.261-.835-.58l-.604-1.612c-.12-.318-.495-.58-.836-.58h-4.473zm2.475-7.661c-.107-.323-.327-.324-.436-.002l-1.317 3.904c-.109.323.079.586.42.586h2.212c.341 0 .53-.265.423-.587l-1.302-3.901zM211.146 26.989a.62.62 0 0 1-.619.618h-2.908a.619.619 0 0 1-.618-.618V15.787a.62.62 0 0 0-.619-.618h-2.189a.62.62 0 0 1-.618-.619v-2.272a.62.62 0 0 1 .618-.619h9.763a.62.62 0 0 1 .618.619v2.272a.62.62 0 0 1-.618.619h-2.189a.62.62 0 0 0-.619.618v11.202zM220.744 26.989c0 .34-.277.618-.618.618h-2.91a.619.619 0 0 1-.618-.618V12.277a.62.62 0 0 1 .618-.619h2.91a.62.62 0 0 1 .618.619v14.712zM240.811 19.336c0 5.16-3.7 8.8-8.818 8.8-5.119 0-8.82-3.64-8.82-8.8 0-4.822 4.228-8.208 8.82-8.208 4.589 0 8.818 3.386 8.818 8.208zm-13.326.02c0 2.752 2.031 4.76 4.507 4.76 2.475 0 4.504-2.008 4.504-4.76 0-2.199-2.029-4.207-4.504-4.207-2.475 0-4.507 2.008-4.507 4.207zM243.257 12.277a.62.62 0 0 1 .618-.619h2.908c.34 0 .79.221.999.488l6.832 8.774c.209.268.423.21.423-.131v-8.513a.62.62 0 0 1 .618-.619h2.908a.62.62 0 0 1 .619.619v14.712a.62.62 0 0 1-.619.618h-2.908c-.341 0-.789-.22-.998-.488l-6.833-8.797c-.209-.268-.423-.21-.423.131v8.536a.62.62 0 0 1-.618.618h-2.908a.62.62 0 0 1-.618-.618V12.277zM185.228 16.254c-.811-.656-1.853-1.002-2.914-1.002-2.54 0-4.254 1.945-4.254 4.42 0 2.518 1.737 4.337 4.315 4.337 1.015 0 2.031-.367 2.842-.989.27-.208.733-.176.733.255v3.395c0 .34-.266.701-.591.803 0 0-1.778.558-3.066.558-2.223 0-4.338-.848-5.987-2.35-1.756-1.586-2.561-3.659-2.561-6.028 0-2.178.826-4.273 2.349-5.837 1.565-1.607 3.829-2.581 6.071-2.581 1.332 0 3.197.611 3.197.611.323.105.588.47.588.811v3.221c0 .306-.453.594-.722.376zM60.394 2.649a1.378 1.378 0 0 0 0-2.756 30.68 30.68 0 0 0-14.753 3.759A30.696 30.696 0 0 0 30.886-.107C13.855-.106 0 13.749 0 30.779s13.855 30.886 30.886 30.886c5.34 0 10.367-1.363 14.755-3.759a30.683 30.683 0 0 0 14.753 3.759 1.377 1.377 0 1 0 0-2.756c-4.294 0-8.365-.971-12.009-2.698a30.836 30.836 0 0 0 3.033-2.386 24.593 24.593 0 0 0 8.976 1.692 1.378 1.378 0 0 0 0-2.756 21.86 21.86 0 0 1-6.79-1.085 30.926 30.926 0 0 0 2.146-2.601c1.362.315 2.776.498 4.233.498a1.377 1.377 0 1 0 0-2.755c-.88 0-1.737-.091-2.58-.228a30.917 30.917 0 0 0 1.487-2.807c.361.028.724.053 1.091.053h.002a1.376 1.376 0 0 0 .014-2.753c1.146-3.225 1.774-6.692 1.774-10.305s-.629-7.079-1.774-10.306a1.376 1.376 0 0 0-.014-2.752c-.369 0-.73.024-1.093.055a30.398 30.398 0 0 0-1.489-2.812 16.13 16.13 0 0 1 2.58-.225h.002a1.377 1.377 0 1 0 0-2.756h-.001c-1.445 0-2.861.181-4.234.496a31.394 31.394 0 0 0-2.145-2.598 21.889 21.889 0 0 1 6.79-1.085 1.378 1.378 0 0 0 0-2.756c-3.165 0-6.189.604-8.974 1.692a31.397 31.397 0 0 0-3.036-2.387 28.02 28.02 0 0 1 12.011-2.695zm-29.508 56.26c-15.512 0-28.13-12.618-28.13-28.13s12.618-28.13 28.13-28.13c4.294 0 8.364.971 12.01 2.698a30.97 30.97 0 0 0-3.036 2.387 24.574 24.574 0 0 0-8.974-1.692c-13.641 0-24.738 11.097-24.738 24.737s11.098 24.738 24.738 24.738c3.166 0 6.19-.604 8.976-1.692.96.856 1.973 1.652 3.034 2.386a27.98 27.98 0 0 1-12.01 2.698zm16.778-42.301c-.33.286-.66.569-.971.88-.448.448-.87.915-1.268 1.399a18.779 18.779 0 0 0-2-2.068 22.364 22.364 0 0 1 2.215-2.288 22.549 22.549 0 0 1 2.024 2.077zm-2.023 30.42a22.064 22.064 0 0 1-2.215-2.289 18.878 18.878 0 0 0 2.009-2.079 19.06 19.06 0 0 0 2.234 2.285 22.16 22.16 0 0 1-2.028 2.083zm-5.227 3.531a28.268 28.268 0 0 1-2.18-2.482 18.828 18.828 0 0 0 3.024-1.637c.681.83 1.417 1.611 2.198 2.347a21.85 21.85 0 0 1-3.042 1.772zm3.366-29.278a18.397 18.397 0 0 0-1.481 3.171 13.14 13.14 0 0 0-1.952-2.646c.426-.949.92-1.858 1.472-2.73.719.673 1.374 1.41 1.961 2.205zm3.146 9.499c0 2.397-.544 4.665-1.491 6.711a15.925 15.925 0 0 1-1.491-6.711c0-2.361.524-4.638 1.486-6.72a15.917 15.917 0 0 1 1.496 6.72zm-5.108 11.703a21.892 21.892 0 0 1-1.472-2.729 13.175 13.175 0 0 0 1.958-2.656 18.668 18.668 0 0 0 1.482 3.171 16.044 16.044 0 0 1-1.968 2.214zm-3.407-11.704c0-2.074.308-4.074.848-5.979a10.234 10.234 0 0 1 0 11.958 21.86 21.86 0 0 1-.848-5.979zM36.23 25.49a7.529 7.529 0 0 0-3.04-1.872c.236-.9.518-1.783.839-2.646 1.107.356 2.128.9 3.036 1.586-.336.951-.616 1.93-.835 2.932zm-6.372 9.941c-2.137-.472-3.742-2.375-3.742-4.651s1.605-4.18 3.742-4.651a31.01 31.01 0 0 0 0 9.302zm2.406-4.652c0-1.508.122-2.988.352-4.433 1.775.695 3.04 2.414 3.04 4.433s-1.265 3.737-3.04 4.433a28.171 28.171 0 0 1-.352-4.433zm-1.83-7.503c-3.938.236-7.073 3.506-7.073 7.503s3.135 7.267 7.073 7.503c.238.944.52 1.872.842 2.781-.131.004-.259.02-.39.02-5.682-.001-10.304-4.623-10.304-10.304s4.622-10.303 10.304-10.303c.131 0 .259.016.389.02a30.028 30.028 0 0 0-.841 2.78zM33.19 37.94a7.529 7.529 0 0 0 3.04-1.872c.219 1.003.499 1.982.836 2.935a10.28 10.28 0 0 1-3.035 1.585 27.739 27.739 0 0 1-.841-2.648zm4.971 3.678c.438.895.933 1.758 1.472 2.589a16.034 16.034 0 0 1-3.038 1.543 28.159 28.159 0 0 1-1.474-2.631 13.002 13.002 0 0 0 3.04-1.501zm0-21.675a13.054 13.054 0 0 0-3.041-1.503c.444-.906.939-1.782 1.475-2.632 1.072.41 2.091.925 3.038 1.543a25.107 25.107 0 0 0-1.472 2.592zm-5.789-2.131a13.014 13.014 0 0 0-1.486-.092c-7.201 0-13.06 5.858-13.06 13.059 0 7.199 5.858 13.059 13.06 13.06a13 13 0 0 0 1.486-.092 30.68 30.68 0 0 0 1.471 2.787 15.943 15.943 0 0 1-14.3-4.413 15.936 15.936 0 0 1-4.697-11.342c0-8.844 7.196-16.04 16.04-16.04 1.011 0 1.997.105 2.957.285a30.832 30.832 0 0 0-1.471 2.788zm-1.486-5.828c-10.364 0-18.796 8.432-18.796 18.795a18.67 18.67 0 0 0 5.505 13.291 18.674 18.674 0 0 0 13.291 5.504c1.582 0 3.112-.218 4.581-.587a30.969 30.969 0 0 0 2.209 2.689 21.86 21.86 0 0 1-6.79 1.085c-12.122 0-21.983-9.861-21.983-21.982S18.764 8.798 30.886 8.798c2.37 0 4.649.388 6.789 1.085a31.435 31.435 0 0 0-2.208 2.688 18.762 18.762 0 0 0-4.581-.587zM47.081 40.27c.589-1 1.084-2.058 1.481-3.165a13.064 13.064 0 0 0 2.188 2.908c.013.013.027.023.04.037a22.027 22.027 0 0 1-1.475 2.674 16.25 16.25 0 0 1-2.234-2.454zm2.6-9.49c0-2.412.84-4.63 2.235-6.388a21.878 21.878 0 0 1-.004 12.783 10.218 10.218 0 0 1-2.231-6.395zm5.373 5.269a7.438 7.438 0 0 0 3.041 1.875 27.627 27.627 0 0 1-.89 2.772 10.154 10.154 0 0 1-3.076-1.444c.379-1.037.685-2.107.925-3.203zm3.962-5.269a28.13 28.13 0 0 1-.354 4.44 4.758 4.758 0 0 1-3.038-4.441 4.786 4.786 0 0 1 3.038-4.442c.23 1.448.354 2.931.354 4.443zm-.92-7.139a7.441 7.441 0 0 0-3.04 1.879 24.597 24.597 0 0 0-.925-3.207 10.231 10.231 0 0 1 3.076-1.443c.342.901.64 1.825.889 2.771zm-9.532.82a18.731 18.731 0 0 0-1.487-3.179c.477-.644.988-1.269 1.565-1.845.214-.215.444-.406.668-.607a21.547 21.547 0 0 1 1.482 2.686 13.216 13.216 0 0 0-2.228 2.945zm-7.305-9.341a18.754 18.754 0 0 0-3.024-1.638c.68-.869 1.404-1.7 2.18-2.482a22.344 22.344 0 0 1 3.043 1.772 24.774 24.774 0 0 0-2.199 2.348zm4.382 39.597a28.079 28.079 0 0 1-3.029-2.16 24.956 24.956 0 0 0 3.029-1.934c.957.715 1.97 1.361 3.028 1.934a28.61 28.61 0 0 1-3.028 2.16zm5.224-4.158a21.92 21.92 0 0 1-3.043-1.772 25.161 25.161 0 0 0 2.061-2.183c.967.62 1.991 1.156 3.068 1.594a28.85 28.85 0 0 1-2.086 2.361zm3.74-4.687a16.057 16.057 0 0 1-3.074-1.485 24.624 24.624 0 0 0 1.484-2.572c.963.61 1.994 1.096 3.076 1.434a27.744 27.744 0 0 1-1.486 2.623zm1.489-27.558a12.952 12.952 0 0 0-3.072 1.438 24.622 24.622 0 0 0-1.495-2.587 15.7 15.7 0 0 1 3.076-1.483 28.195 28.195 0 0 1 1.491 2.632zm-3.154-4.963a18.476 18.476 0 0 0-3.066 1.594 25.068 25.068 0 0 0-2.052-2.172 21.913 21.913 0 0 1 3.043-1.771 27.733 27.733 0 0 1 2.075 2.349zm-4.271-4.349a24.877 24.877 0 0 0-3.028 1.934 25.214 25.214 0 0 0-3.03-1.934 28.366 28.366 0 0 1 3.028-2.16 28.29 28.29 0 0 1 3.03 2.16z"
    />
  </svg>
);

export default HeaderLogo;