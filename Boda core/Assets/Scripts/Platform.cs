using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Platform : MonoBehaviour
{
    target = FindObjectOfType<Player>().gameObject;
}
// Update is called once per freme 
void Update()
{
    if(GameObject.transform.position.y <= TargetJoint2D.transform.position.y)
}
Vector3 newPos = new Vector3(gameObject.transform.x, TargetJoint2D.transform.position)

}