using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    void Update()
    {
        if (FindObjectOfType<PlayerLaunch>().canDrag == false)
        {
            Vector3 target;
            if (GameObject.Find("CatHead") != null)
            {
                 target = GameObject.Find("CatHead").transform.position;
            }
            else
            {
                 target = GameObject.Find("towerAlt").transform.position;
            }
           
            transform.position = new Vector3(target.x, transform.position.y, -10);
        }
    }
}
