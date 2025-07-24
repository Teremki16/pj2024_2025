using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraScript : MonoBehaviour
{
    GameObject prevObj;
    [SerializeField] GameObject cube;
    void Update()
    {
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        RaycastHit hit;
        if(Physics.Raycast(ray, out hit, 5f))
        {
            if (hit.transform.gameObject.GetComponent<MeshRenderer>() != null)
            {
                if (prevObj == null)
                {
                    hit.transform.gameObject.GetComponent<MeshRenderer>().material.color = Color.green;
                    prevObj = hit.transform.gameObject;
                }
                else if (!prevObj.Equals(hit.transform.gameObject))
                {
                    hit.transform.gameObject.GetComponent<MeshRenderer>().material.color = Color.green;
                    prevObj.GetComponent<MeshRenderer>().material.color = Color.white;
                    prevObj = hit.transform.gameObject;
                }
            }
        }
        else
        {
            if(prevObj != null)
            prevObj.GetComponent<MeshRenderer>().material.color = Color.white;
            prevObj = null;
        }
    }
}
