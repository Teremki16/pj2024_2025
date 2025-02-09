using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Aim : MonoBehaviour
{
    void Start()
    {
        transform.GetChild(0).GetComponent<SpriteRenderer>().sortingOrder = 4;
    }
    void Update()
    {
        Vector2 screenPosition = new Vector2(Input.mousePosition.x, Input.mousePosition.y);
        Vector3 worldPosition = Camera.main.ScreenToWorldPoint(screenPosition);
        transform.right = new Vector3(worldPosition.x, worldPosition.y, 0) - transform.position;
        Debug.Log(transform.rotation.z);
        if (transform.rotation.z > 0.7f)
        {
            transform.GetChild(0).GetComponent<SpriteRenderer>().flipY = true;
        }
        else
        {
            transform.GetChild(0).GetComponent<SpriteRenderer>().flipY = false;
        }
        if (FindObjectOfType<PlayerMovement>().moveV > 0)
        {
            transform.GetChild(0).GetComponent<SpriteRenderer>().sortingOrder = 4;
        }
        else if (FindObjectOfType<PlayerMovement>().moveV < 0 ||
            FindObjectOfType<PlayerMovement>().moveH != 0)
        {
            transform.GetChild(0).GetComponent<SpriteRenderer>().sortingOrder = 6;
        }
    }
}
